import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { defaultIfEmpty, filter, map, startWith, switchMap, tap } from 'rxjs';
import { TeslaColor } from '../types/tesla-color.type';
import { TeslaConfig } from '../types/tesla-config.type';
import { TeslaModel } from '../types/tesla-model.type';
import { TeslaOptions } from '../types/tesla-options.type';

@Injectable()
export class TeslaFormService {
  // Step 1 form.
  modelForm = new FormGroup({
    model: new FormControl<TeslaModel | null>(null, { validators: [Validators.required] }),
    color: new FormControl<TeslaColor | null>(null, { validators: [Validators.required] }),
  });
  modelFormValues = toSignal(this.modelForm.valueChanges);

  private modelFormValid$ = this.modelForm.statusChanges.pipe(map(status => status === 'VALID'));
  modelFormValid = toSignal(this.modelFormValid$, { initialValue: false });

  // Step 2 form.
  configForm = new FormGroup({
    config: new FormControl<TeslaConfig | null>(null, { validators: [Validators.required] }),
    towHitch: new FormControl(false, { nonNullable: true }),
    yoke: new FormControl(false, { nonNullable: true }),
  });
  configFormValues = toSignal(this.configForm.valueChanges);

  private configFormValid$ = this.configForm.statusChanges.pipe(map(status => status === 'VALID'));
  configFormValid = toSignal(this.configFormValid$, { initialValue: false });

  private models$ = this.http.get<TeslaModel[]>('/models').pipe(startWith<TeslaModel[]>([]));
  models = toSignal(this.models$, { initialValue: [] });

  private colors$ = this.modelForm.controls.model.valueChanges.pipe(
    // Reset modelForm.color upon modelForm.model change.
    tap(() => this.modelForm.controls.color.reset()),
    map(model => model?.colors || []),
  );
  colors = toSignal(this.colors$, { initialValue: [] });

  private imgUrl$ = this.modelForm.valueChanges.pipe(
    map(value =>
      value.model?.code && value.color?.code
        ? `https://interstate21.com/tesla-app/images/${value.model.code}/${value.color.code}.jpg`
        : null,
    ),
  );
  imgUrl = toSignal(this.imgUrl$);

  private options$ = this.modelForm.controls.model.valueChanges.pipe(
    // Reset configForm upon modelForm.model change.
    tap(() => this.configForm.reset()),
    switchMap(model => this.http.get<TeslaOptions>(`/options/${model!.code}`)),
  );
  options = toSignal(this.options$, {
    initialValue: {
      configs: [],
      towHitch: false,
      yoke: false,
    },
  });

  constructor(private http: HttpClient) {}
}

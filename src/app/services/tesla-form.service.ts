import { HttpClient } from '@angular/common/http';
import { Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest, map, of, startWith, switchMap, tap } from 'rxjs';
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

  // Step 2 form.
  configForm = new FormGroup({
    config: new FormControl<TeslaConfig | null>(null, { validators: [Validators.required] }),
    towHitch: new FormControl(false, { nonNullable: true }),
    yoke: new FormControl(false, { nonNullable: true }),
  });

  private modelFormValid$ = this.modelForm.statusChanges.pipe(map(status => status === 'VALID'));
  modelFormValid = toSignal(this.modelFormValid$, { initialValue: false });

  private configFormValid$ = this.configForm.statusChanges.pipe(map(status => status === 'VALID'));
  configFormValid = toSignal(this.configFormValid$, { initialValue: false });

  private models$ = this.http.get<TeslaModel[]>('/models').pipe(
    tap(models => this.modelForm.controls.model.setValue(models[0])),
    startWith<TeslaModel[]>([]),
  );
  models = toSignal(this.models$, { initialValue: [] });

  private colors$ = this.modelForm.controls.model.valueChanges.pipe(
    // Reset color FormControl upon model FormControl change.
    tap(() => this.modelForm.controls.color.reset()),
    map(model => model?.colors || []),
  );
  colors = toSignal(this.colors$, { initialValue: [] });

  private imgUrl$ = this.modelForm.valueChanges.pipe(
    map(({ model, color }) => {
      if (!model?.code || !color?.code) {
        return null;
      }

      return `https://interstate21.com/tesla-app/images/${model.code}/${color.code}.jpg`;
    }),
  );
  imgUrl = toSignal(this.imgUrl$, { initialValue: null });

  private options$ = this.modelForm.controls.model.valueChanges.pipe(
    // Reset configForm FormGroup upon model FormControl change.
    tap(() => this.configForm.reset()),
    switchMap(model => {
      if (!model?.code) {
        return of<TeslaOptions>({
          configs: [],
          towHitch: false,
          yoke: false,
        });
      }

      return this.http.get<TeslaOptions>(`/options/${model.code}`);
    }),
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

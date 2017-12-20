import { ComponentClass, StatelessComponent, ComponentType } from 'react';
import Loadable, { OptionsWithoutRender, CommonOptions } from 'react-loadable';

import Loader from './Components/Loader/Loader';

type LoaderType = () =>
  Promise<ComponentClass<{}> |
  StatelessComponent<{}> |
  { default: ComponentType<{}> }>;

const appLoadableOptions: CommonOptions = {
  loading: Loader,
  delay: 200
};

export function AppLoadable(loader: LoaderType, defaultOptions: CommonOptions = appLoadableOptions) {
  const options: OptionsWithoutRender<{}> = {
    ...defaultOptions,
    loader: loader
  };

  return Loadable(options);
}

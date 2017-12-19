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

function AppLoadable(loader: LoaderType, defaultOptions: CommonOptions = appLoadableOptions) {
  const options: OptionsWithoutRender<{}> = {
    ...defaultOptions,
    loader: loader
  };

  return Loadable(options);
}

const SubjectListContainerImport = () => import('./Components/SubjectList/SubjectListContainer');

export const LoadableSubjectListContainer = AppLoadable(SubjectListContainerImport);

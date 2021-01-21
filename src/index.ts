import './App/index';

const importAll = (r: any): void => {
  r.keys().forEach(r);
};

importAll(require.context('./', true, /\.(s?css$)/));

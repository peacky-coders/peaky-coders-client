export enum E_Routes {
  home = '/',
  profile = '/profile',
  article = '/article/:articleId',
}

export type T_Params = {
  articleId: string
}

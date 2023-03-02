export enum E_Routes {
  home = '/',
  editor = '/profile/editor',
  profile = '/profile',
  article = '/article/:articleId',
}

export type T_Params = {
  articleId: string
}

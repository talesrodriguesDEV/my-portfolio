export interface IDefaultComponentProps {
  english: boolean
}

export interface IHeaderProps extends IDefaultComponentProps {
  setEnglish: (func: (english: boolean) => boolean) => void
}

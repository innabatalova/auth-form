export interface IButtonAuthProps {
  size: 'large' | 'middle' | 'small'
  type: "text" | "link" | "default" | "primary" | "dashed" | undefined
  text: string
  disabled: boolean
  styles?: {}
  onClick?: () => void
}
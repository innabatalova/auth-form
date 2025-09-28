export interface IInputLoginProps {
  size: 'large' | 'middle' | 'small'
  placeholder: string
  value: string
  onChange(value: string): void
}
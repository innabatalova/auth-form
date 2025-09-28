export interface IInputPasswordProps {
  size: 'large' | 'middle' | 'small'
  placeholder: string
  visibilityToggle?: boolean
  value: string
  onChange(value: string): void
}
import variables from '@/app/variables.module.scss'
import '@/app/styles.scss'

type Props = {}

export default function ButtonSass({}: Props) {
  return (
    <button className='w-48 bg-white my-custom-style-scss' style={{ color: variables.primaryColor }}>Click me Sass</button>
  )
}
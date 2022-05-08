import { render } from 'react-dom'
import { ComposableCommandBar } from './ComposableCommandBar'
import { CommandBarBasicExample } from './FluentCommandBar'
import { PolymorfCommandBar } from './PolymorfCommandBar'

render(<CommandBarBasicExample />, document.querySelector('#fluent'))

render(<ComposableCommandBar />, document.querySelector('#composable'))

render(<PolymorfCommandBar />, document.querySelector('#polymorf'))

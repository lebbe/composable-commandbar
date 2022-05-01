import { render } from 'react-dom'
import { ComposableCommandBar } from './ComposableCommandBar'
import { CommandBarBasicExample } from './FluentCommandBar'

render(<CommandBarBasicExample />, document.querySelector('#fluent'))

render(<ComposableCommandBar />, document.querySelector('#composable'))

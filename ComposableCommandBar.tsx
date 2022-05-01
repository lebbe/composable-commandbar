import CommandBar, { CBFarItems, CBItems } from './components/CommandBar'
import Icon from './components/Icon'
import Dropdown, { DropdownButton } from './components/Dropdown'
import { Callout } from './components/Callout'
import Button from './components/Button'

export function ComposableCommandBar() {
  return (
    <CommandBar>
      <CBItems>
        <Dropdown>
          <DropdownButton icon="Add">New</DropdownButton>
          <Callout>
            <Button icon="Mail">Email message</Button>
            <Button icon="Calendar">Calendar event</Button>
          </Callout>
        </Dropdown>
        <Dropdown>
          <DropdownButton icon="Upload">Upload</DropdownButton>
          <Callout>
            <Button>File</Button>
            <Button>Folder</Button>
          </Callout>
        </Dropdown>
        <Button icon="Share">Share</Button>
        <Button icon="Download">Download</Button>
        <Dropdown>
          <DropdownButton overflow />
          <Callout>
            <Button icon="MoveToFolder">Move to...</Button>
            <Button icon="Copy">Copy to...</Button>
            <Button icon="Edit">Rename</Button>
          </Callout>
        </Dropdown>
      </CBItems>

      <CBFarItems>
        <Button icon="Tiles" />
        <Button icon="Info" />
      </CBFarItems>
    </CommandBar>
  )
}

import CommandBar from './components/CommandBar'
import Dropdown from './components/Dropdown'
import Button from './components/Button'

export function ComposableCommandBar() {
  return (
    <CommandBar>
      <CommandBar.Items>
        <Dropdown>
          <Dropdown.Button icon="Add">New</Dropdown.Button>
          <Dropdown.Drawer>
            <Button icon="Mail">Email message</Button>
            <Button icon="Calendar">Calendar event</Button>
          </Dropdown.Drawer>
        </Dropdown>
        <Dropdown>
          <Dropdown.Button icon="Upload">Upload</Dropdown.Button>
          <Dropdown.Drawer>
            <Button>File</Button>
            <Button>Folder</Button>
          </Dropdown.Drawer>
        </Dropdown>
        <Button icon="Share">Share</Button>
        <Button icon="Download">Download</Button>
        <Dropdown>
          <Dropdown.Button overflow />
          <Dropdown.Drawer>
            <Button icon="MoveToFolder">Move to...</Button>
            <Button icon="Copy">Copy to...</Button>
            <Button icon="Edit">Rename</Button>
          </Dropdown.Drawer>
        </Dropdown>
      </CommandBar.Items>

      <CommandBar.FarItems>
        <Button icon="Tiles" />
        <Button icon="Info" />
      </CommandBar.FarItems>
    </CommandBar>
  )
}

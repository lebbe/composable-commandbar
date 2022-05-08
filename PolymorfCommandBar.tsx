import CommandBar from './components/PolymorfCommandBar/CommandBar'
import Dropdown from './components/Dropdown'
import Button from './components/Button'

export function PolymorfCommandBar() {
  return (
    <CommandBar aria-label="Inbox actions">
      <CommandBar.Items
        aria-label="Email actions"
        items={[
          <Dropdown>
            <Dropdown.Button icon="Add">New</Dropdown.Button>
            <Dropdown.Drawer>
              <Button icon="Mail">Email message</Button>
              <Button icon="Calendar">Calendar event</Button>
            </Dropdown.Drawer>
          </Dropdown>,
          <Dropdown>
            <Dropdown.Button icon="Upload">Upload</Dropdown.Button>
            <Dropdown.Drawer>
              <Button>File</Button>
              <Button>Folder</Button>
            </Dropdown.Drawer>
          </Dropdown>,
          <Button icon="Share">Share</Button>,
          <Button icon="Download">Download</Button>,
        ]}
        overflowItems={[
          <Button icon="MoveToFolder">Move to...</Button>,
          <Button icon="Copy">Copy to...</Button>,
          <Button icon="Edit">Rename</Button>,
        ]}
      />

      <CommandBar.FarItems aria-label="More actions">
        <Button icon="Tiles" />
        <Button icon="Info" />
      </CommandBar.FarItems>
    </CommandBar>
  )
}

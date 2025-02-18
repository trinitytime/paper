import * as fs from 'node:fs/promises'
import * as path from 'node:path'

export class FilebasePaper {
  root: string

  constructor(root: string) {
    this.root = root
  }

  async getItemList(location: string) {
    // Read all items
    const files = await fs.readdir(path.join(this.root, location))

    console.log(files)

    return files
  }

  getItemById() {
    // Read an item by ID
  }

  createItem() {
    // Create an item
  }

  updateItem() {
    // Update an item by ID
  }

  deleteItem() {
    // Delete an item by ID
  }
}

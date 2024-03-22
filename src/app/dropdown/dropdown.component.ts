import { Component, OnInit } from '@angular/core';

interface Option {
  label: string;
  value: string;
  showInput?: boolean; 
  showNestedButton?: boolean;

}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  isOpen = false;
  selectedOption: Option | null = null;

  options: Option[] = [
    { label: 'Table', value: 'table', showInput: true },
    { label: 'Folder', value: 'folder',showNestedButton: true }
  ];

  inputValue: string = ''; // To store the input value

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  handleSelection(option: Option) {
    this.selectedOption = option;
    this.isOpen = false;
    // this.selected.emit(option);
  }

  handleNestedSelection(option: Option) {
    console.log('Nested selection:', option);
    // You can handle selections from nested components here (optional)
  }

  selectOption(option: Option) {
    this.selectedOption = option;
    this.isOpen = false; // Close dropdown on selection
    this.inputValue = ''; // Clear input value on selection change
  }

  save() {
    console.log('Saving table input:', this.inputValue);
    // Replace with your logic to handle saving the input value (e.g., send to server)
  }

  cancel() {
    this.inputValue = ''; 
  }

  toggleNestedDropdown() {
    // Implement your logic for handling the nested plus button click
    console.log('Nested plus button clicked!');
    // You can open a nested dropdown, perform actions, etc.
  }
  
  ngOnInit() {
  }
}

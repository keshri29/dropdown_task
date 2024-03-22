import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Option {
  label: string;
  value: string;
  showInput?: boolean;
  showNestedButton?: boolean;
}

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent {
  @Input() option: Option | undefined;
  @Input() level: number = 0; // To track nesting level
  @Output() selected = new EventEmitter<Option>();

  isOpen = false;
  inputValue: string = '';
  selectedOption: Option | null = null;
 

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  handleSelection(option: Option) {
    this.selectedOption = option;
    this.isOpen = false;
  }

  handleNestedSelection(option: Option) {
    console.log('Nested selection:', option);
    this.selected.emit(option); 
    if (option.showNestedButton) {
      this.toggleDropdown(); 
    }
  }
  
  selectOption() {
    this.selected.emit(this.option);
    this.isOpen = false;
    this.inputValue = '';
  }

  save() {
    console.log('Saving table input:', this.inputValue);
    // Replace with your logic to handle saving the input value (e.g., send to server)
  }

  cancel() {
    this.inputValue = '';
  }
}

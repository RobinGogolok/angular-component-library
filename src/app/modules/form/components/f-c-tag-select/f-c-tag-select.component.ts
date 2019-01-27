import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Item {
  label: string;
  value: string;
}
export interface FilteredItem {
  label: string;
  value: string;
  focus: boolean;
}

@Component( {
  selector: 'app-f-c-tag-select',
  templateUrl: './f-c-tag-select.component.html',
  styleUrls: [ './f-c-tag-select.component.scss' ]
} )
export class FCTagSelectComponent implements OnInit, OnDestroy {

  @ViewChild("searchInput") searchInputRef: ElementRef;
  @ViewChild("searchAutocompleteWrap") searchAutocompleteWrapRef: ElementRef;

  public items: Item[] = [
    { label: 'Abortion Policy/Anti-Abortion', value: 'Abortion Policy/Anti-Abortion' },
    { label: 'Abortion Policy/Pro-Abortion Rights', value: 'Abortion Policy/Pro-Abortion Rights' },
    { label: 'Accountants', value: 'Accountants' },
    { label: 'Advertising/Public Relations', value: 'Advertising/Public Relations' },
    { label: 'Aerospace, Defense Contractors', value: 'Aerospace, Defense Contractors' },
    { label: 'Agribusiness', value: 'Agribusiness' },
    { label: 'Agricultural Services &amp; Products', value: 'Agricultural Services &amp; Products' },
    { label: 'Agriculture', value: 'Agriculture' },
    { label: 'Air Transport', value: 'Air Transport' },
    { label: 'Air Transport Unions', value: 'Air Transport Unions' },
    { label: 'Airlines', value: 'Airlines' },
    { label: 'Alcoholic Beverages', value: 'Alcoholic Beverages' },
    { label: 'Alternative Energy Production &amp; Services', value: 'Alternative Energy Production &amp; Services' },
    { label: 'Architectural Services', value: 'Architectural Services' },
    { label: 'Attorneys/Law Firms', value: 'Attorneys/Law Firms' },
    { label: 'Auto Dealers', value: 'Auto Dealers' },
    { label: 'Auto Dealers, Japanese', value: 'Auto Dealers, Japanese' },
    { label: 'Auto Manufacturers', value: 'Auto Manufacturers' },
    { label: 'Automotive', value: 'Automotive' },
    { label: 'Banking, Mortgage', value: 'Banking, Mortgage' },
    { label: 'Banks, Commercial', value: 'Banks, Commercial' },
    { label: 'Banks, Savings &amp; Loans', value: 'Banks, Savings &amp; Loans' },
    { label: 'Bars &amp; Restaurants', value: 'Bars &amp; Restaurants' },
    { label: 'Beer, Wine &amp; Liquor', value: 'Beer, Wine &amp; Liquor' },
    { label: 'Books, Magazines &amp; Newspapers', value: 'Books, Magazines &amp; Newspapers' },
    { label: 'Broadcasters, Radio/TV', value: 'Broadcasters, Radio/TV' },
    { label: 'Builders/General Contractors', value: 'Builders/General Contractors' },
    { label: 'Builders/Residential', value: 'Builders/Residential' },
    { label: 'Building Materials &amp; Equipment', value: 'Building Materials &amp; Equipment' },
    { label: 'Building Trade Unions', value: 'Building Trade Unions' },
    { label: 'Business Associations', value: 'Business Associations' },
    { label: 'Business Services', value: 'Business Services' },
    {
      label: 'Cable &amp; Satellite TV Production &amp; Distribution',
      value: 'Cable &amp; Satellite TV Production &amp; Distribution'
    },
    { label: 'Candidate Committees', value: 'Candidate Committees' },
    { label: 'Candidate Committees, Democratic', value: 'Candidate Committees, Democratic' },
    { label: 'Candidate Committees, Republican', value: 'Candidate Committees, Republican' },
    { label: 'Car Dealers', value: 'Car Dealers' },
    { label: 'Car Dealers, Imports', value: 'Car Dealers, Imports' },
    { label: 'Car Manufacturers', value: 'Car Manufacturers' },
    { label: 'Casinos / Gambling', value: 'Casinos / Gambling' },
    { label: 'Cattle Ranchers/Livestock', value: 'Cattle Ranchers/Livestock' },
    { label: 'Chemical &amp; Related Manufacturing', value: 'Chemical &amp; Related Manufacturing' },
    { label: 'Chiropractors', value: 'Chiropractors' },
    { label: 'Civil Servants/Public Officials', value: 'Civil Servants/Public Officials' },
    { label: 'Clergy &amp; Religious Organizations', value: 'Clergy &amp; Religious Organizations' },
    { label: 'Clothing Manufacturing', value: 'Clothing Manufacturing' },
    { label: 'Coal Mining', value: 'Coal Mining' },
    { label: 'Colleges, Universities &amp; Schools', value: 'Colleges, Universities &amp; Schools' },
    { label: 'Commercial Banks', value: 'Commercial Banks' },
    { label: 'Commercial TV &amp; Radio Stations', value: 'Commercial TV &amp; Radio Stations' },
    { label: 'Communications/Electronics', value: 'Communications/Electronics' },
    { label: 'Computer Software', value: 'Computer Software' },
    { label: 'Conservative/Republican', value: 'Conservative/Republican' },
    { label: 'Construction', value: 'Construction' },
    { label: 'Construction Services', value: 'Construction Services' },
    { label: 'Construction Unions', value: 'Construction Unions' },
    { label: 'Credit Unions', value: 'Credit Unions' },
    { label: 'Crop Production &amp; Basic Processing', value: 'Crop Production &amp; Basic Processing' },
    { label: 'Cruise Lines', value: 'Cruise Lines' },
    { label: 'Cruise Ships &amp; Lines', value: 'Cruise Ships &amp; Lines' },
    { label: 'Dairy', value: 'Dairy' },
    { label: 'Defense', value: 'Defense' },
    { label: 'Defense Aerospace', value: 'Defense Aerospace' },
    { label: 'Defense Electronics', value: 'Defense Electronics' },
    { label: 'Defense/Foreign Policy Advocates', value: 'Defense/Foreign Policy Advocates' },
    { label: 'Democratic Candidate Committees', value: 'Democratic Candidate Committees' },
    { label: 'Democratic Leadership PACs', value: 'Democratic Leadership PACs' },
    { label: 'Democratic/Liberal', value: 'Democratic/Liberal' },
    { label: 'Dentists', value: 'Dentists' },
    { label: 'Doctors &amp; Other Health Professionals', value: 'Doctors &amp; Other Health Professionals' },
    { label: 'Drug Manufacturers', value: 'Drug Manufacturers' },
    { label: 'Education', value: 'Education' },
    { label: 'Electric Utilities', value: 'Electric Utilities' },
    { label: 'Electronics Manufacturing &amp; Equipment', value: 'Electronics Manufacturing &amp; Equipment' },
    { label: 'Electronics, Defense Contractors', value: 'Electronics, Defense Contractors' },
    { label: 'Energy &amp; Natural Resources', value: 'Energy &amp; Natural Resources' },
    { label: 'Entertainment Industry', value: 'Entertainment Industry' },
    { label: 'Environment', value: 'Environment' },
    { label: 'Farm Bureaus', value: 'Farm Bureaus' },
    { label: 'Farming', value: 'Farming' },
    { label: 'Finance / Credit Companies', value: 'Finance / Credit Companies' },
    { label: 'Finance, Insurance &amp; Real Estate', value: 'Finance, Insurance &amp; Real Estate' },
    { label: 'Food &amp; Beverage', value: 'Food &amp; Beverage' },
    { label: 'Food Processing &amp; Sales', value: 'Food Processing &amp; Sales' },
    { label: 'Food Products Manufacturing', value: 'Food Products Manufacturing' },
    { label: 'Food Stores', value: 'Food Stores' },
    { label: 'For-profit Education', value: 'For-profit Education' },
    { label: 'For-profit Prisons', value: 'For-profit Prisons' },
    { label: 'Foreign &amp; Defense Policy', value: 'Foreign &amp; Defense Policy' },
    { label: 'Forestry &amp; Forest Products', value: 'Forestry &amp; Forest Products' },
    {
      label: 'Foundations, Philanthropists &amp; Non-Profits',
      value: 'Foundations, Philanthropists &amp; Non-Profits'
    },
    { label: 'Funeral Services', value: 'Funeral Services' },
    { label: 'Gambling &amp; Casinos', value: 'Gambling &amp; Casinos' },
    { label: 'Gambling, Indian Casinos', value: 'Gambling, Indian Casinos' },
    { label: 'Garbage Collection/Waste Management', value: 'Garbage Collection/Waste Management' },
    { label: 'Gas &amp; Oil', value: 'Gas &amp; Oil' },
    { label: 'Gay &amp; Lesbian Rights &amp; Issues', value: 'Gay &amp; Lesbian Rights &amp; Issues' },
    { label: 'General Contractors', value: 'General Contractors' },
    { label: 'Government Employee Unions', value: 'Government Employee Unions' },
    { label: 'Government Employees', value: 'Government Employees' },
    { label: 'Gun Control', value: 'Gun Control' },
    { label: 'Gun Rights', value: 'Gun Rights' },
    { label: 'Health', value: 'Health' },
    { label: 'Health Professionals', value: 'Health Professionals' },
    { label: 'Health Services/HMOs', value: 'Health Services/HMOs' },
    { label: 'Hedge Funds', value: 'Hedge Funds' },
    { label: 'HMOs &amp; Health Care Services', value: 'HMOs &amp; Health Care Services' },
    { label: 'Home Builders', value: 'Home Builders' },
    { label: 'Hospitals &amp; Nursing Homes', value: 'Hospitals &amp; Nursing Homes' },
    { label: 'Hotels, Motels &amp; Tourism', value: 'Hotels, Motels &amp; Tourism' },
    { label: 'Human Rights', value: 'Human Rights' },
    { label: 'Ideological/Single-Issue', value: 'Ideological/Single-Issue' },
    { label: 'Indian Gaming', value: 'Indian Gaming' },
    { label: 'Industrial Unions', value: 'Industrial Unions' },
    { label: 'Insurance', value: 'Insurance' },
    { label: 'Internet', value: 'Internet' },
    { label: 'Israel Policy', value: 'Israel Policy' },
    { label: 'Labor', value: 'Labor' },
    { label: 'Lawyers &amp; Lobbyists', value: 'Lawyers &amp; Lobbyists' },
    { label: 'Lawyers / Law Firms', value: 'Lawyers / Law Firms' },
    { label: 'Leadership PACs', value: 'Leadership PACs' },
    { label: 'Liberal/Democratic', value: 'Liberal/Democratic' },
    { label: 'Liquor, Wine &amp; Beer', value: 'Liquor, Wine &amp; Beer' },
    { label: 'Livestock', value: 'Livestock' },
    { label: 'Lobbyists', value: 'Lobbyists' },
    { label: 'Lodging / Tourism', value: 'Lodging / Tourism' },
    { label: 'Logging, Timber &amp; Paper Mills', value: 'Logging, Timber &amp; Paper Mills' },
    { label: 'Manufacturing, Misc', value: 'Manufacturing, Misc' },
    { label: 'Marine Transport', value: 'Marine Transport' },
    { label: 'Meat processing &amp; products', value: 'Meat processing &amp; products' },
    { label: 'Medical Supplies', value: 'Medical Supplies' },
    { label: 'Mining', value: 'Mining' },
    { label: 'Misc Business', value: 'Misc Business' },
    { label: 'Misc Finance', value: 'Misc Finance' },
    { label: 'Misc Manufacturing &amp; Distributing', value: 'Misc Manufacturing &amp; Distributing' },
    { label: 'Misc Unions', value: 'Misc Unions' },
    { label: 'Miscellaneous Defense', value: 'Miscellaneous Defense' },
    { label: 'Miscellaneous Services', value: 'Miscellaneous Services' },
    { label: 'Mortgage Bankers &amp; Brokers', value: 'Mortgage Bankers &amp; Brokers' },
    { label: 'Motion Picture Production &amp; Distribution', value: 'Motion Picture Production &amp; Distribution' },
    { label: 'Music Production', value: 'Music Production' },
    { label: 'Natural Gas Pipelines', value: 'Natural Gas Pipelines' },
    { label: 'Newspaper, Magazine &amp; Book Publishing', value: 'Newspaper, Magazine &amp; Book Publishing' },
    {
      label: 'Non-profits, Foundations &amp; Philanthropists',
      value: 'Non-profits, Foundations &amp; Philanthropists'
    },
    { label: 'Nurses', value: 'Nurses' },
    { label: 'Nursing Homes/Hospitals', value: 'Nursing Homes/Hospitals' },
    { label: 'Nutritional &amp; Dietary Supplements', value: 'Nutritional &amp; Dietary Supplements' },
    { label: 'Oil &amp; Gas', value: 'Oil &amp; Gas' },
    { label: 'Other', value: 'Other' },
    { label: 'Payday Lenders', value: 'Payday Lenders' },
    { label: 'Pharmaceutical Manufacturing', value: 'Pharmaceutical Manufacturing' },
    { label: 'Pharmaceuticals / Health Products', value: 'Pharmaceuticals / Health Products' },
    { label: 'Phone Companies', value: 'Phone Companies' },
    { label: 'Physicians &amp; Other Health Professionals', value: 'Physicians &amp; Other Health Professionals' },
    { label: 'Postal Unions', value: 'Postal Unions' },
    { label: 'Poultry &amp; Eggs', value: 'Poultry &amp; Eggs' },
    { label: 'Power Utilities', value: 'Power Utilities' },
    { label: 'Printing &amp; Publishing', value: 'Printing &amp; Publishing' },
    { label: 'Private Equity &amp; Investment Firms', value: 'Private Equity &amp; Investment Firms' },
    { label: 'Pro-Israel', value: 'Pro-Israel' },
    {
      label: 'Professional Sports, Sports Arenas &amp; Related Equipment &amp; Services',
      value: 'Professional Sports, Sports Arenas &amp; Related Equipment &amp; Services'
    },
    { label: 'Progressive/Democratic', value: 'Progressive/Democratic' },
    { label: 'Public Employees', value: 'Public Employees' },
    { label: 'Public Sector Unions', value: 'Public Sector Unions' },
    { label: 'Publishing &amp; Printing', value: 'Publishing &amp; Printing' },
    { label: 'Radio/TV Stations', value: 'Radio/TV Stations' },
    { label: 'Railroads', value: 'Railroads' },
    { label: 'Real Estate', value: 'Real Estate' },
    { label: 'Record Companies/Singers', value: 'Record Companies/Singers' },
    { label: 'Recorded Music &amp; Music Production', value: 'Recorded Music &amp; Music Production' },
    { label: 'Recreation / Live Entertainment', value: 'Recreation / Live Entertainment' },
    { label: 'Religious Organizations/Clergy', value: 'Religious Organizations/Clergy' },
    { label: 'Republican Candidate Committees', value: 'Republican Candidate Committees' },
    { label: 'Republican Leadership PACs', value: 'Republican Leadership PACs' },
    { label: 'Republican/Conservative', value: 'Republican/Conservative' },
    { label: 'Residential Construction', value: 'Residential Construction' },
    { label: 'Restaurants &amp; Drinking Establishments', value: 'Restaurants &amp; Drinking Establishments' },
    { label: 'Retail Sales', value: 'Retail Sales' },
    { label: 'Retired', value: 'Retired' },
    { label: 'Savings &amp; Loans', value: 'Savings &amp; Loans' },
    { label: 'Schools/Education', value: 'Schools/Education' },
    { label: 'Sea Transport', value: 'Sea Transport' },
    { label: 'Securities &amp; Investment', value: 'Securities &amp; Investment' },
    { label: 'Special Trade Contractors', value: 'Special Trade Contractors' },
    { label: 'Sports, Professional', value: 'Sports, Professional' },
    { label: 'Steel Production', value: 'Steel Production' },
    { label: 'Stock Brokers/Investment Industry', value: 'Stock Brokers/Investment Industry' },
    { label: 'Student Loan Companies', value: 'Student Loan Companies' },
    { label: 'Sugar Cane &amp; Sugar Beets', value: 'Sugar Cane &amp; Sugar Beets' },
    { label: 'Teachers Unions', value: 'Teachers Unions' },
    { label: 'Teachers/Education', value: 'Teachers/Education' },
    { label: 'Telecom Services &amp; Equipment', value: 'Telecom Services &amp; Equipment' },
    { label: 'Telephone Utilities', value: 'Telephone Utilities' },
    { label: 'Textiles', value: 'Textiles' },
    { label: 'Timber, Logging &amp; Paper Mills', value: 'Timber, Logging &amp; Paper Mills' },
    { label: 'Tobacco', value: 'Tobacco' },
    { label: 'Transportation', value: 'Transportation' },
    { label: 'Transportation Unions', value: 'Transportation Unions' },
    { label: 'Trash Collection/Waste Management', value: 'Trash Collection/Waste Management' },
    { label: 'Trucking', value: 'Trucking' },
    { label: 'TV / Movies / Music', value: 'TV / Movies / Music' },
    { label: 'TV Production', value: 'TV Production' },
    { label: 'Unions', value: 'Unions' },
    { label: 'Unions, Airline', value: 'Unions, Airline' },
    { label: 'Unions, Building Trades', value: 'Unions, Building Trades' },
    { label: 'Unions, Industrial', value: 'Unions, Industrial' },
    { label: 'Unions, Misc', value: 'Unions, Misc' },
    { label: 'Unions, Public Sector', value: 'Unions, Public Sector' },
    { label: 'Unions, Teacher', value: 'Unions, Teacher' },
    { label: 'Unions, Transportation', value: 'Unions, Transportation' },
    { label: 'Universities, Colleges &amp; Schools', value: 'Universities, Colleges &amp; Schools' },
    { label: 'Vegetables &amp; Fruits', value: 'Vegetables &amp; Fruits' },
    { label: 'Venture Capital', value: 'Venture Capital' },
    { label: 'Waste Management', value: 'Waste Management' },
    { label: 'Wine, Beer &amp; Liquor', value: 'Wine, Beer &amp; Liquor' },
    { label: 'Women\'s Issues', value: 'Women\'s Issues' },
  ];
  readonly maxItems = 10;

  public isSearchAutocompleteOpen = false;
  public filteredItems: FilteredItem[] = [];

  private filteredItemFocusIndex: number | null = null;
  private selectedItems: Item[] = [];
  private windowEventHandler: EventListener;

  private formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initFormGroup();
    this.initWindowEventHandler();
  }

  public openSearchAutocomplete(): void {
    this.isSearchAutocompleteOpen = true;
  }

  public closeSearchAutocomplete(): void {
    this.isSearchAutocompleteOpen = false;
  }

  public onSearchInputInput( event ): void {
    this.filteredItemFocusIndex = null;
    if (event.target === undefined && event.target.value === undefined) {
      if (!environment.production) {
        console.warn('Can\'t read target input value!', event);
      }
      return;
    }
    const searchInput = event.target.value;
    if (searchInput === '') {
      this.clearFilteredItems();
      return;
    }
    this.filterItems(searchInput);
  }

  public onSearchInputFocus(): void {
    this.openSearchAutocomplete();
  }

  public onSearchInputKeyDown( event: KeyboardEvent): void {
    switch ( event.code ) {
      case 'ArrowDown': {
        if ( this.filteredItems.length === 0 ) {
          return;
        }
        if (this.filteredItemFocusIndex === null) {
          this.filteredItemsFocusNext();
        } else if (this.filteredItemFocusIndex === this.filteredItems.length -1) {
        } else {
          this.filteredItemsFocusNext();
        }
        this.setFocusToFilteredItem(this.filteredItemFocusIndex);
        // this.scrollFocusedItemInToView(); @ToDo: Fix bug in this method
        break;
      }
      case 'ArrowUp': {
        if ( this.filteredItems.length === 0 ) {
          return;
        }
        if (this.filteredItemFocusIndex === null) {
          return;
        } else if (this.filteredItemFocusIndex === 0) {
          this.filteredItemFocusIndex = null;
          const searchValue = this.getSearchInputValue();
          this.patchValue('');
          this.patchValue(searchValue);
        } else {
          this.filteredItemsFocusPrevious();
        }
        this.setFocusToFilteredItem(this.filteredItemFocusIndex);
        // this.scrollFocusedItemInToView(); @ToDo: Fix bug in this method
        break;
      }
      case 'Enter': {
        if ( this.filteredItems.length === 0 ) {
          return;
        }
        if (this.filteredItemFocusIndex === null) {
          break;
        }
        const item = this.filteredItems[this.filteredItemFocusIndex];
        if (!this.isItemSelected(item)) {
          this.addItemToSelectedItems(item);
          this.filteredItemFocusIndex = null;
          this.clearSearchInput();
          this.clearFilteredItems();
        }
        break;
      }
      case 'Escape': {
        if (this.getSearchInputValue() !== '') {
        this.filteredItemFocusIndex = null;
        this.clearSearchInput();
        this.clearFilteredItems();
        }
        break;
      }
    }
  }

  public onItemClick( item: Item ): void {
    this.setFocusToSearchInput();
    if (!this.isItemSelected(item)) {
      this.addItemToSelectedItems( item );
      this.clearSearchInput();
      this.clearFilteredItems();
    }
  }

  public onItemMouseEnter(item: FilteredItem): void {
    this.filteredItemFocusIndex = this.filteredItems.indexOf(item);
    this.setFocusToFilteredItem(this.filteredItemFocusIndex);
  }

  public onClearSearchInputClick(): void {
    this.clearSearchInput();
    this.setFocusToSearchInput();
    this.clearFilteredItems();
  }

  public isSearchInputEmpty(): boolean {
    return this.formGroup.value.searchInput.length === 0;
  }

  private filteredItemsFocusNext(): void {
    if ( this.filteredItems.length === 0 ) {
      return;
    }
    let loop = true;
    let index = this.filteredItemFocusIndex;
    if (index === null) {
      index = -1;
    }
    while(loop) {
      const nextItem = this.filteredItems[index + 1];
      if (typeof nextItem !== 'undefined') {
        if (!this.isItemSelected(nextItem)) {
          index++;
          loop = false;
        } else {
          index++;
        }
      } else {
        loop = false;
        index = this.filteredItemFocusIndex;
      }
    }
    this.filteredItemFocusIndex = index;
  }

  private filteredItemsFocusPrevious(): void {
    if ( this.filteredItems.length === 0 ) {
      return;
    }
    let loop = true;
    let index = this.filteredItemFocusIndex;
    while(loop) {
      const nextItem = this.filteredItems[index - 1];
      if (typeof nextItem !== 'undefined') {
        if (!this.isItemSelected(nextItem)) {
          index--;
          loop = false;
        } else {
          index--;
        }
      } else {
        loop = false;
        index = null;
      }
    }
    this.filteredItemFocusIndex = index;
  }

  private initFormGroup(): void {
    this.formGroup = this.fb.group({
      searchInput: ['']
    });
  }

  private addItemToSelectedItems(item: Item): void {
    this.selectedItems.push(item);
  }

  private removeItemFromSelectedItems(item: Item): void {
    const selectedItemIndex = this.selectedItems.indexOf(item);
    if (selectedItemIndex === -1) {
      if (!environment.production) {
        console.warn(`Can't find item "${item.label}" in selectedItems array!`);
      }
    }
    this.selectedItems.splice(selectedItemIndex, 1);
  }

  private filterItems(searchInput: string): void {
    const filteredItems = this.items.filter( item => {
      return item.label.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0;
    });
    if (filteredItems.length > this.maxItems) {
      this.filteredItems = this.transformItemsToFilteredItems(
        filteredItems.slice(0, this.maxItems)
      );
    } else {
      this.filteredItems = this.transformItemsToFilteredItems(filteredItems);
    }
  }

  public isItemSelected(item: Item): boolean {
    return this.selectedItems.some(selectedItem => {
      return selectedItem.label ===  item.label && selectedItem.value === item.value;
    });
  }

  private clearFilteredItems(): void {
    this.filteredItems = [];
  }

  private clearSearchInput(): void {
    this.patchValue('');
  }

  private patchValue(value: string): void {
    this.formGroup.patchValue({
      searchInput: value
    })
  }

  private getSearchInputValue(): string {
    return this.formGroup.value.searchInput;
  }

  private setFocusToSearchInput(): void {
    this.searchInputRef.nativeElement.focus();
  }

  private transformItemToFilteredItem(item: Item): FilteredItem {
    return {
      label: item.label,
      value: item.value,
      focus: false
    }
  }

  private transformItemsToFilteredItems(items: Item[]): FilteredItem[] {
    return items.map(item => this.transformItemToFilteredItem(item));
  }

  private setFocusToFilteredItem(itemIndex: number | null): void {
    if ( this.filteredItems.length === 0 ) {
      return;
    }
    this.filteredItems.forEach((item, index) => {
      if (item.focus) {
        item.focus = false;
      }
      if (itemIndex === index) {
        item.focus = true;
      }
    });
  }

  private scrollFocusedItemInToView(): void {
    const searchAutocompleteWrap = this.searchAutocompleteWrapRef.nativeElement as HTMLElement;
    const searchAutocompleteWrapHeight = searchAutocompleteWrap.offsetHeight;
    if (searchAutocompleteWrapHeight < 208) {
      return;
    }
    const items = searchAutocompleteWrap.getElementsByClassName('item') as HTMLCollection;
    const firstItem = items[0] as HTMLElement;
    const itemHeight = firstItem.offsetHeight;
    const focusedItem = this.filteredItems.find(item => {
      return item.focus === true;
    });
    if (typeof focusedItem === 'undefined') {
      return;
    }
    const focusedItemIndex = this.filteredItems.indexOf(focusedItem);
    const focusedItemHTMLElement = items[focusedItemIndex] as HTMLElement;
    let scrollTo = 0;
    if (focusedItemIndex > 0) {
      scrollTo = focusedItemHTMLElement.offsetTop + itemHeight - 208;
    }
    if (scrollTo >= 0 && scrollTo !== searchAutocompleteWrap.scrollTop) {
      searchAutocompleteWrap.scrollTop = scrollTo;
    }
  }

  private initWindowEventHandler(): void {
    this.windowEventHandler = (event) => {
      const targetElement = event.target as HTMLElement;
      if (!targetElement || typeof targetElement.classList === undefined) {
        return;
      }
      if (!targetElement.classList.contains('close-not-on-click')) {
        this.closeSearchAutocomplete();
      }
    };
    window.addEventListener('click', this.windowEventHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.windowEventHandler);
  }
}

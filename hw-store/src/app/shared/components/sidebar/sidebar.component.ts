import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleRight, faBoxes, faChartBar, faSearch, faShoppingCart, faTruck, faUserFriends, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { menuLinks } from '../../../global/dashboard-menu';
import { LinkMenu, SectionMenu, SubSectionMenu } from '../../../global/object-menu';
import { TokenService } from '../../../core/services/token.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  menuLinks: Array<SectionMenu> = menuLinks;
  linkSelectedPath: Array<number> = [];
  linkSelected: LinkMenu | null = null;
  roles: Array<string> = [];

  showSidebar = false;

  iconFaSearch = faSearch;
  iconFaAngleDown = faAngleDown;
  iconFaAngleRight = faAngleRight;
  iconFaShop = faShoppingCart;
  iconFaOrder = faTruck;
  iconFaInventory = faBoxes;
  iconFaUser = faUserFriends;
  iconFaReports = faChartBar;
  iconFaInventoryAdmin = faWarehouse;

  constructor (private tokenService: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getRoles();
  }

  containsRoles(arr: string[]): boolean {
    if (this.roles.length == 0) {
      return false;
    }
    
    return arr.some(element => this.roles.includes(element));
  }

  toggleSidebar(){
    this.showSidebar = !this.showSidebar;
  }

  setLink( sectionId: number, subSectionId: number, linkId: number){
    let section = this.findSectionById(menuLinks, sectionId)
    if (!section) return;
    let subSection = this.findSubSectionById(section.subSections, subSectionId);
    if (!subSection) return;
    let link = this.findLinkById(subSection.links, linkId);
    if (!link) return;
    link.selected = true;
    
    if (this.linkSelected != null && this.linkSelected.id != link.id) {
      this.linkSelected.selected = false;
    }

    this.linkSelected = link;
    this.linkSelectedPath = [sectionId, subSectionId, linkId]
    
  }

  setSubSection( sectionId: number, subSectionId: number){
    let section = this.findSectionById(menuLinks, sectionId)
    if (!section) return;
    let subSection = this.findSubSectionById(section.subSections, subSectionId);
    if (!subSection) return;
    subSection.show = !subSection.show;
    
  }

  findSectionById(arr: Array<SectionMenu>, id: number): SectionMenu | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return arr[i]
      }
    }
    return null;
  }

  findSubSectionById(arr: Array<SubSectionMenu>, id: number): SubSectionMenu | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return arr[i]
      }
    }
    return null;
  }

  findLinkById(arr: Array<LinkMenu>, id: number): LinkMenu | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return arr[i]
      }
    }
    return null;
  }

}

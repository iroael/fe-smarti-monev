interface list {
  all: keyData[];
  doing: keyData[];
  done: keyData[];
}
export interface keyData {
  id: Number;
  title: string;
  badge: string;
  type: string;
  font: string;
  img: string;
  sites: string;
  desc: string;
  issue: string;
  resolved: string;
  comment: string;
  like: string;
  progress: string;
  customers_img1: string;
  customers_img2: string;
  customers_img3: string;
}
interface sidebarTabs {
  color: string,
  icon: string,
  name: string
}
interface access {
  icon: string,
  name: string,
  size: string,
  seen: string
}
interface folder {
  icon: string,
  name: string,
  count: number,
  time: string
}
interface files {
  icon: string,
  name: string,
  desc: string
}
interface simple {
  title: string,
  list: number,
  place: string,
  image: string,
  priority: string,
  badge: string,
  id: number,
  more?: string,
  date: string,
  img?: string
}
interface producttab {
  id: string,
  svg: string,
  name: string,
  desc: string
}
interface letterboxSidebar {
  id: string,
  svg: string,
  name: string,
  color?: string
}
interface edit {
  title: string;
  date: string;
  class: string;
  status: string;
  price: string;
}
interface cards {
  img: string,
  name: string,
  email: string,
  follower: string,
  following: string,
  post: string
}
export interface MailItem {
  icon: string;
  svgclass?: string;
  bgclass?: string;
}
export interface bookmarkType {
  id: number;
  fillstar: boolean;
  image: string;
  title: string;
  website_url: string;
  desc: string;
  collection: string;
}
interface SentItem {
  img?: string;
  name?: string;
  desctitle?: string;
  desc?: string;
  badgeclass?: string;
  badge?: string;
  textclass?: string;
  text?: string;
  circle?: string;
  badgeclass1?: string;
  badge1?: string;
  time?: string;
  dec?: string;
}
export interface personalType {
  id?: string;
  image: string;
  name2: string;
  name1: string;
  active?: boolean;
  email: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  personality: string;
  city: string;
  mobileno: string;
  website: string;
  interest: string;
}
interface organizationType {
  id: number,
  name1: string,
  image: string,
  name2: string,
  email: string,
  active: string,
  gender: string
}
interface FormField {
  class: string;
  placeholder: string;
  type: string;
  title: string;
}
interface count {
  title: string
}
export const projectList: list = {
  all: [
    {
      id: 1,
      title: "Endless admin Design",
      badge: "Doing",
      type: "primary progress-bar-striped",
      font: "primary",
      img: "user/3.jpg",
      sites: "Themeforest, australia",
      desc: "Endless Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "12",
      resolved: "5",
      comment: "7",
      like: "+10",
      progress: "70",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 2,
      title: "Universal admin Design",
      badge: "Done",
      type: "secondary",
      font: "secondary",
      img: "user/5.jpg",
      sites: "Envato, australia",
      desc: "Universal Admin is full featured, multipurpose, premium bootstrap admin template.",
      issue: "24",
      resolved: "24",
      comment: "40",
      like: "+3",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 3,
      title: "Poco admin Design",
      badge: "Done",
      type: "success",
      font: "success",
      img: "user/1.jpg",
      sites: "Envato, australia",
      desc: "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "40",
      resolved: "40",
      comment: "20",
      like: "+2",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 4,
      title: "Xolo admin Design",
      badge: "Done",
      type: "info",
      font: "info",
      img: "user/4.jpg",
      sites: "Envato, australia",
      desc: "Xolo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "24",
      resolved: "24",
      comment: "40",
      like: "+3",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 5,
      title: "Zeta admin Design",
      badge: "Doing",
      type: "warning progress-bar-striped",
      font: "warning",
      img: "user/1.jpg",
      sites: "Themeforest, australia",
      desc: "Zeta Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "12",
      resolved: "5",
      comment: "7",
      like: "+10",
      progress: "70",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 6,
      title: "Tivo admin Design",
      badge: "Done",
      type: "danger",
      font: "danger",
      img: "user/5.jpg",
      sites: "Envato, australia",
      desc: "Tivo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "40",
      resolved: "40",
      comment: "20",
      like: "+2",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
  ],
  doing: [
    {
      id: 1,
      title: "Endless admin Design",
      badge: "Doing",
      type: "primary progress-bar-striped",
      font: "primary",
      img: "user/3.jpg",
      sites: "Themeforest, australia",
      desc: "Endless Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "12",
      resolved: "5",
      comment: "7",
      like: "+10",
      progress: "70",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 2,
      title: "Universal admin Design",
      badge: "Doing",
      type: "primary",
      font: "primary",
      img: "user/5.jpg",
      sites: "Envato, australia",
      desc: "Universal Admin is full featured, multipurpose, premium bootstrap admin template.",
      issue: "24",
      resolved: "24",
      comment: "40",
      like: "+3",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 3,
      title: "Poco admin Design",
      badge: "Doing",
      type: "primary",
      font: "primary",
      img: "user/3.jpg",
      sites: "Envato, australia",
      desc: "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "40",
      resolved: "40",
      comment: "20",
      like: "+2",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 4,
      title: "Tivo admin Design",
      badge: "Doing",
      type: "primary",
      font: "primary",
      img: "user/1.jpg",
      sites: "Envato, australia",
      desc: "Tivo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "24",
      resolved: "24",
      comment: "40",
      like: "+3",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 5,
      title: "Enzo admin Design",
      badge: "Doing",
      type: "primary progress-bar-striped",
      font: "primary",
      img: "user/3.jpg",
      sites: "Themeforest, australia",
      desc: "Enzo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "12",
      resolved: "5",
      comment: "7",
      like: "+10",
      progress: "70",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 6,
      title: "Xolo admin Design",
      badge: "Doing",
      type: "primary",
      font: "primary",
      img: "user/5.jpg",
      sites: "Envato, australia",
      desc: "Xolo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "40",
      resolved: "40",
      comment: "20",
      like: "+2",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
  ],

  done: [
    {
      id: 1,
      title: "Endless admin Design",
      badge: "Done",
      type: "secondary progress-bar-striped",
      font: "secondary",
      img: "user/1.jpg",
      sites: "Themeforest, australia",
      desc: "Endless Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "12",
      resolved: "5",
      comment: "7",
      like: "+10",
      progress: "70",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 2,
      title: "Universal admin Design",
      badge: "Done",
      type: "secondary",
      font: "secondary",
      img: "user/5.jpg",
      sites: "Envato, australia",
      desc: "Universal Admin is full featured, multipurpose, premium bootstrap admin template.",
      issue: "24",
      resolved: "24",
      comment: "40",
      like: "+3",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 3,
      title: "Poco admin Design",
      badge: "Done",
      type: "secondary",
      font: "secondary",
      img: "user/1.jpg",
      sites: "Envato, australia",
      desc: "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "40",
      resolved: "40",
      comment: "20",
      like: "+2",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 4,
      title: "Xolo admin Design",
      badge: "Done",
      type: "secondary",
      font: "secondary",
      img: "user/3.jpg",
      sites: "Envato, australia",
      desc: "Xolo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "24",
      resolved: "24",
      comment: "40",
      like: "+3",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 5,
      title: "Zeta admin Design",
      badge: "Done",
      type: "secondary progress-bar-striped",
      font: "secondary",
      img: "user/1.jpg",
      sites: "Themeforest, australia",
      desc: "Zeta Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "12",
      resolved: "5",
      comment: "7",
      like: "+10",
      progress: "70",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
    {
      id: 6,
      title: "Tivo admin Design",
      badge: "Done",
      type: "secondary",
      font: "secondary",
      img: "user/5.jpg",
      sites: "Envato, australia",
      desc: "Tivo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: "40",
      resolved: "40",
      comment: "20",
      like: "+2",
      progress: "100",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    },
  ],
},
  sidebarTabs: sidebarTabs[] = [
    {
      color: 'primary',
      icon: 'ph:house',
      name: 'Home'
    },
    {
      color: 'light',
      icon: 'ph:folder-simple-bold',
      name: 'All'
    },
    {
      color: 'light',
      icon: 'ic:sharp-access-time',
      name: 'Recent'
    },
    {
      color: 'light',
      icon: 'ic:outline-star-border',
      name: 'starred'
    },
    {
      color: 'light',
      icon: 'ion:alert-circle-outline',
      name: 'Recovery'
    },
    {
      color: 'light',
      icon: 'lucide:trash-2',
      name: 'Delete'
    }
  ],
  access: access[] = [
    {
      icon: "fa-file-image-o txt-primary",
      name: "Logo.psd",
      size: '2.0 MB',
      seen: '1 hour ago'
    },
    {
      icon: "fa-file-archive-o txt-secondary",
      name: "Project.zip",
      size: '1.90 GB',
      seen: '1 hour ago'
    },
    {
      icon: "fa fa-file-excel-o txt-success",
      name: "Backend.xls",
      size: '2.0 MB',
      seen: '1 hour ago'
    },
    {
      icon: "fa-file-text-o txt-info",
      name: "requirements.txt",
      size: '0.9 KB',
      seen: '1 hour ago'
    }
  ],
  folders: folder[] = [
    {
      icon: 'fa fa-file-archive-o',
      name: 'Tivo admin',
      count: 20,
      time: '2 Hour ago'
    },
    {
      icon: 'fa fa-folder',
      name: 'Viho admin',
      count: 14,
      time: '3 Hour ago'
    },
    {
      icon: 'fa fa-file-archive-o',
      name: 'Unice admin',
      count: 15,
      time: '3 Hour ago'
    },
    {
      icon: 'fa fa-file-archive-o',
      name: 'Koho admin',
      count: 10,
      time: '1 Hour ago'
    }
  ],
  files: files[] = [
    {
      icon: 'fa-file-archive-o txt-secondary',
      name: 'Logo.psd',
      desc: '7 Hour ago, 2.0 MB'
    },
    {
      icon: 'fa-file-excel-o txt-success',
      name: 'Backend.xls',
      desc: '2 Day ago, 3.0 GB'
    },
    {
      icon: 'fa-file-text-o txt-info',
      name: 'Project.zip',
      desc: '1 Day ago, 1.9 GB'
    },
    {
      icon: 'fa-file-text-o txt-primary',
      name: 'Report.txt',
      desc: '1 Day ago, 0.9 KB'
    }
  ],
  simple: simple[] = [
    {
      title: "Design Dashboard",
      list: 0,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      priority: "Medium",
      badge: "badge-primary",
      id: 1,
      more: "+10",
      date: "23/7/23",
    },
    {
      title: "Test Sidebar",
      list: 0,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      badge: "badge-danger",
      id: 2,
      more: "+5",
      priority: "Argent",
      date: "24/7/23",
    },
    {
      title: "Test Sidebar",
      list: 1,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      badge: "badge-danger",
      id: 3,
      more: "+5",
      priority: "Argent",
      date: "24/7/23",
    },
    {
      title: "Dashboard issue",
      list: 1,
      place: "Pixelstrap, New york",
      image: "user/3.jpg",
      priority: "Low",
      badge: "badge-success",
      id: 4,
      more: "+5",
      date: "24/7/23",
    },
    {
      title: "Test Sidebar",
      list: 2,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      badge: "badge-danger",
      id: 5,
      more: "+5",
      priority: "Argent",
      date: "24/7/23",
    },
    {
      title: "Design Dashboard",
      list: 2,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      priority: "Medium",
      badge: "badge-primary",
      id: 6,
      more: "+10",
      date: "23/7/23",
    },
  ],
  custom: simple[] = [
    {
      title: "Design Dashboard",
      list: 0,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      priority: "Medium",
      badge: "badge-info",
      id: 1,
      date: "23/7/23",
    },
    {
      title: "Dashboard issue",
      list: 0,
      place: "Pixelstrap, New york",
      image: "user/3.jpg",
      priority: "Low",
      badge: "badge-success",
      id: 2,
      date: "24/7/23",
    },
    {
      title: "Test Sidebar",
      list: 1,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      badge: "badge-danger",
      id: 3,
      priority: "Argent",
      date: "24/7/23",
    },
    {
      title: "Dashboard issue",
      list: 1,
      place: "Pixelstrap, New york",
      image: "user/3.jpg",
      priority: "Low",
      badge: "badge-success",
      id: 4,
      date: "24/7/23",
    },
    {
      title: "Test Sidebar",
      list: 2,
      place: "Themeforest, australia",
      image: "user/3.jpg",
      badge: "badge-danger",
      id: 5,
      priority: "Argent",
      date: "24/7/23",
    },
    {
      title: "Dashboard issue",
      list: 2,
      place: "Pixelstrap, New york",
      image: "user/3.jpg",
      priority: "Low",
      badge: "badge-success",
      id: 6,
      date: "24/7/23",
    },
  ],
  api: simple[] = [
    {
      title: "Design Dashboard",
      list: 0,
      place: "Themeforest, australia",
      priority: "Medium",
      badge: "badge-info",
      image: "user/3.jpg",
      id: 1,
      more: "+10",
      date: "23/7/23",
    },
    {
      title: "Dashboard issue",
      list: 0,
      place: "Pixelstrap, New york",
      priority: "Low",
      badge: "badge-success",
      image: "user/3.jpg",
      id: 2,
      more: "+5",
      date: "24/7/23",
    },
    {
      title: "Test Sidebar",
      list: 1,
      place: "Themeforest, australia",
      img: "other-images/maintenance-bg.jpg",
      badge: "badge-danger",
      id: 3,
      image: "user/3.jpg",
      priority: "Argent",
      more: "+5",
      date: "24/7/23",
    },
    {
      title: "Dashboard issue",
      list: 1,
      place: "Pixelstrap, New york",
      image: "user/3.jpg",
      priority: "Low",
      badge: "badge-success",
      id: 4,
      more: "+5",
      date: "24/7/23",
    },
    {
      title: "Test Sidebar",
      list: 2,
      place: "Themeforest, australia",
      badge: "badge-danger",
      id: 5,
      image: "user/3.jpg",
      priority: "Argent",
      more: "+5",
      date: "24/7/23",
    },
    {
      title: "Dashboard issue",
      list: 2,
      place: "Pixelstrap, New york",
      img: "other-images/bg-profile.png",
      priority: "Low",
      image: "user/3.jpg",
      badge: "badge-success",
      id: 6,
      more: "+10",
      date: "24/7/23",
    },
  ],
  addProductTabs: producttab[] = [
    {
      id: '#detail-product',
      svg: 'product-detail',
      name: 'Add Product Details',
      desc: 'Add Product name & details'
    },
    {
      id: '#gallery-product',
      svg: 'product-gallery',
      name: 'Product gallery',
      desc: 'thumbnail & Add Product Gallery'
    },
    {
      id: '#category-product',
      svg: 'product-category',
      name: 'Product Categories',
      desc: 'Add Product category, Status and Tags'
    },
    {
      id: '#pricings',
      svg: 'pricing',
      name: 'Selling prices',
      desc: 'Add Product basic price & Discount'
    },
    {
      id: '#advance-product',
      svg: 'advance',
      name: 'Advance',
      desc: 'Add Meta details & Inventory details'
    }
  ],
  letterboxSidebar: letterboxSidebar[] = [
    {
      id: 'inbox-pill',
      svg: 'inbox',
      name: 'Inbox'
    },
    {
      id: 'sent-pill',
      svg: 'sent',
      name: 'Sent'
    },
    {
      id: 'starred-pill',
      svg: 'star',
      name: 'Starred'
    },
    {
      id: 'draft-pill',
      svg: 'draft',
      name: 'Draft'
    },
    {
      id: 'trash-pill',
      svg: 'trash',
      name: 'Trash'
    },
    {
      id: 'work-pill',
      svg: 'pintag',
      name: 'Work',
      color: 'stroke-primary'
    },
    {
      id: 'private-pill',
      svg: 'pintag',
      name: 'Private',
      color: 'stroke-warning'
    },
    {
      id: 'support-pill',
      svg: 'pintag',
      name: 'Support',
      color: 'stroke-success'
    },
  ],
  letterBoxData = [
    {
      img: '/images/user/6.jpg',
      name: 'Marvin McKinney',
      span1: 'New comments on MSR2024 draft presentation -',
      span2: "New Here's a list of all the topic challenges...",
      color: 'primary',
      badge: 'new',
      time: '2:30 PM'
    },
    {
      img: '/images/user/3.png',
      name: 'Brooklyn Simmons',
      span1: 'Confirm your booking id -',
      span2: "New Here's a list of all the topic challenges...",
      color: 'primary',
      badge: 'deadline',
      time: '7:50 PM'
    },
    {
      sortName: 'EH',
      sortcolor: 'primary',
      name: 'Esther Howard',
      span1: 'Confirm your booking id -',
      span2: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
      color: 'success',
      badge: 'work',
      time: '1:00 PM'
    },
    {
      sortName: 'CW',
      sortcolor: 'success',
      name: 'Cameron Williamson',
      span1: 'Very fiction Link -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '5 Day ago'
    },
    {
      img: '/images/user/6.jpg',
      name: 'Ronald Richards',
      span1: 'Confirm your booking id -',
      span2: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      color: 'light',
      badge: 'Update.Zip',
      time: '7 April'
    },
    {
      img: '/images/user/10.jpg',
      name: 'Darlene Robertson',
      span1: 'Promotion Mail  -',
      span2: "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda ...",
      color: 'light',
      badge: 'Import File..',
      time: '04 April'
    },
    {
      img: '/images/user/12.png',
      name: 'Jacob Jones',
      span1: 'Welcome to our new office  -',
      span2: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      time: '01 April'
    },
    {
      img: '/images/user/3.jpg',
      name: 'Ralph Edwards',
      span1: 'Your Order #224820098 has been Confirmed-',
      span2: "A collection of textile samples lay spread out on the table...",
      time: '01:00 pm'
    },
    {
      img: '/images/user/6.jpg',
      name: 'Ronald Richards',
      span1: 'Confirm your booking id -',
      span2: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      color: 'light',
      badge: 'Update.Zip',
      time: '7 April'
    },
    {
      sortName: 'WT',
      sortcolor: 'success',
      name: 'William Turner',
      span1: 'Very fiction Link  -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '5 Day ago'
    },
    {
      img: '/images/user/12.png',
      name: 'Jacob Jones',
      span1: 'Welcome to our new office  -',
      span2: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      time: '1 April'
    },
    {
      img: '/images/user/3.png',
      name: 'Ralph Edwards',
      span1: 'Your Order #224820098 has been Confirmed-',
      span2: "A collection of textile samples lay spread out on the table...",
      time: '1:00 PM'
    },
  ],
  sentData = [
    {
      img: '/images/user/3.png',
      name: 'Brooklyn Simmons',
      span1: 'Confirm your booking id -',
      span2: "New Here's a list of all the topic challenges...",
      color: 'primary',
      badge: 'deadline',
      time: '7:50 PM'
    },
    {
      img: '/images/user/6.jpg',
      name: 'Marvin McKinney',
      span1: 'New comments on MSR2024 draft presentation -',
      span2: "New Here's a list of all the topic challenges...",
      color: 'primary',
      badge: 'new',
      time: '2:30 PM'
    },
    {
      sortName: 'EH',
      sortcolor: 'primary',
      name: 'Esther Howard',
      span1: 'Confirm your booking id -',
      span2: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
      color: 'success',
      badge: 'work',
      time: '1:00 PM'
    },
    {
      sortName: 'JW',
      sortcolor: 'primary',
      name: 'Jack Williamson',
      span1: 'Very fiction Link -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '1:00 PM'
    },
  ],
  darftData = [
    {
      img: '/images/user/3.jpg',
      name: 'Ralph Edwards',
      span1: 'Your Order #224820098 has been Confirmed-',
      span2: "A collection of textile samples lay spread out on the table...",
      time: '01:00 pm'
    },
    {
      img: '/images/user/6.jpg',
      name: 'Ronald Richards',
      span1: 'Confirm your booking id -',
      span2: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      color: 'light',
      badge: 'Update.Zip',
      time: '7 April'
    },
    {
      sortName: 'WT',
      sortcolor: 'success',
      name: 'William Turner',
      span1: 'Very fiction Link  -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '5 Day ago'
    },
    {
      img: '/images/user/12.png',
      name: 'Jacob Jones',
      span1: 'Welcome to our new office  -',
      span2: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      time: '1 April'
    },
    {
      img: '/images/user/3.png',
      name: 'Ralph Edwards',
      span1: 'Your Order #224820098 has been Confirmed-',
      span2: "A collection of textile samples lay spread out on the table...",
      time: '1:00 PM'
    }
  ],
  trashBox = [
    {
      sortName: 'EH',
      sortcolor: 'primary',
      name: 'Esther Howard',
      span1: 'Confirm your booking id -',
      span2: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
      color: 'success',
      badge: 'work',
      time: '1:00 PM'
    },
    {
      sortName: 'CW',
      sortcolor: 'success',
      name: 'Cameron Williamson',
      span1: 'Very fiction Link -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '5 Day ago'
    },
    {
      sortName: 'EH',
      sortcolor: 'primary',
      name: 'Esther Howard',
      span1: 'Confirm your booking id -',
      span2: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
      color: 'success',
      badge: 'work',
      time: '1:00 PM'
    },
    {
      sortName: 'CW',
      sortcolor: 'success',
      name: 'Cameron Williamson',
      span1: 'Very fiction Link -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '5 Day ago'
    },
  ],
  workLetter = [
    {
      sortName: 'CW',
      sortcolor: 'success',
      name: 'Cameron Williamson',
      span1: 'Very fiction Link -',
      span2: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      time: '5 Day ago'
    },
    {
      sortName: 'EH',
      sortcolor: 'primary',
      name: 'Esther Howard',
      span1: 'Confirm your booking id -',
      span2: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
      color: 'success',
      badge: 'work',
      time: '1:00 PM'
    },
    {
      img: '/images/user/3.png',
      name: 'Ralph Edwards',
      span1: 'Your Order #224820098 has been Confirmed-',
      span2: "A collection of textile samples lay spread out on the table...",
      time: '1:00 PM'
    }
  ],
  useredit: edit[] = [
    {
      title: "Aeroquest",
      date: "28 May 2024",
      class: "badge-light-success",
      status: "Completed",
      price: "$56,908",
    },
    {
      title: "Aquasynth",
      date: "12 June 2024",
      class: " badge-light-danger",
      status: "On going",
      price: "$45,087",
    },
    {
      title: "Robogenix",
      date: "12 July 2024",
      class: "badge-light-warning",
      status: "Pending",
      price: "$60,123",
    },
    {
      title: "Energyharbor",
      date: "14 June 2024",
      class: "badge-light-warning",
      status: "Pending",
      price: "$70,435",
    },
    {
      title: "Nanosphere",
      date: "25 June 2024",
      class: "badge-light-success",
      status: "Completed",
      price: "$15,987",
    },
  ],
  userCard: cards[] = [
    {
      img: "avtar/2.jpg",

      name: "Brooklyn Simmons",
      email: "@brookly.simmons",
      follower: "34.0k",
      following: "897",
      post: "1,908",
    },
    {
      img: "avtar/3.jpg",

      name: "Mark Jecno",
      email: "@mark.jeco",
      follower: "12.0k",
      following: "1400",
      post: "875",
    },
    {
      img: "avtar/11.jpg",

      name: "Dev John",
      email: "@john.dev",
      follower: "15.0k",
      following: "91",
      post: "1874",
    },
    {
      img: "avtar/16.jpg",

      name: "Johan Deo",
      email: "@deo.johan",
      follower: "8.0k",
      following: "570",
      post: "500",
    },
    {
      img: "user/7.jpg",

      name: "Douglas Reichel",
      email: "@reichel.douglas",
      follower: "460",
      following: "2k",
      post: "460",
    },
    {
      img: "avtar/4.jpg",

      name: "Lisa lillian",
      email: "@lisa.lillian",
      follower: "547",
      following: "3.5k",
      post: "547",
    },
    {
      img: "user/1.jpg",

      name: "Olivia rose",
      email: "@rose.olivia",
      follower: "1k",
      following: "742",
      post: "868",
    },
    {
      img: "user/2.png",

      name: "Sarah Karen",
      email: "@karen.sarah",
      follower: "2.5k",
      following: "864",
      post: "972",
    },
  ],
  bookmark: bookmarkType[] = [
    {
      id: 1,
      fillstar: false,
      image: "lightgallry/01.jpg",
      title: "Admin Template",
      website_url: "http://admin.pixelstrap.com/Xolo/ltr/landing-page.html",
      desc: "Xolo is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.",
      collection: "General",
    },
    {
      id: 2,
      fillstar: true,
      image: "lightgallry/02.jpg",
      title: "Universal Template",
      website_url: "https://angular.pixelstrap.com/universal/landing",
      desc: "Universal is beautifully crafted, clean and modern designed admin theme",
      collection: "General",
    },
    {
      id: 3,
      fillstar: false,
      image: "lightgallry/03.jpg",
      title: "Angular Theme",
      website_url: "https://angular.pixelstrap.com/Xolo/landing",
      desc: "Xolo is beautifully crafted, clean and modern designed admin theme",
      collection: "Fs",
    },
    {
      id: 4,
      fillstar: false,
      image: "lightgallry/04.jpg",
      title: "Multikart Admin",
      website_url: "http://themes.pixelstrap.com/multikart/back-end/index.html",
      desc: "Multikart Admin is modern designed admin theme",
      collection: "General",
    },
    {
      id: 5,
      fillstar: false,
      image: "lightgallry/05.jpg",
      title: "Ecommerece theme",
      website_url: "http://themes.pixelstrap.com/multikart",
      desc: "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.",
      collection: "General",
    },
    {
      id: 6,
      fillstar: false,
      image: "lightgallry/06.jpg",
      title: "Tovo app landing page",
      website_url: "http://vue.pixelstrap.com/tovo/home-one",
      desc: "Amazing Landing Page With Easy Customization",
      collection: "Fs",
    },
  ],
  personal: personalType[] = [
    {
      id: "1",
      image: "user/2.png",
      name2: "Barnes",
      name1: "Bucky",
      active: true,
      email: "barnes@gmail.com",
      gender: "Male",
      day: "18",
      month: " May",
      year: "1994",
      personality: "Cool",
      city: "moline acres",
      mobileno: "+0 1800 76855",
      website: "www.test.com",
      interest: "photography",
    },
    {
      id: "2",
      image: "user/8.jpg",
      name2: "Diaz",
      name1: "Comeren",
      email: "comeren@gmail.com",
      active: false,
      gender: "Female",
      day: "7",
      month: "Feb ",
      year: "1995",

      personality: "Cool",
      city: "Delhi",
      mobileno: "+0 1800 55812",
      website: "www.cometest@.com",
      interest: "sports",
    },
    {
      id: "3",
      image: "user/1.jpg",
      name2: "Bell",
      name1: "Issa",
      email: "issabell@gmail.com",
      active: false,
      day: "20",
      month: "Jul ",
      year: "1993",
      gender: "Male",
      personality: "Cool",
      city: "Mumbai",
      mobileno: "+0 1800 87412",
      website: "www.belltest@.com",
      interest: "cooking",
    },
    {
      id: "4",
      image: "user/14.png",
      name2: "Jon",
      name1: "Andew",
      email: "andewjon@gmail.com",
      active: false,
      gender: "Male",
      day: "25",
      month: "Aug ",
      year: "1996",
      personality: "Cool",
      city: "Amreli",
      mobileno: "+0 1800 79877",
      website: "www.test@.com",
      interest: "photography",
    },
    {
      id: "5",
      image: "user/5.jpg",
      name2: "Borne",
      name1: "Jason",
      email: "jasonb@gmail.com",
      active: false,
      gender: "Male",
      day: "30",
      month: "Oct ",
      year: "1992",
      personality: "Cool",
      city: "Delhi",
      mobileno: "+0 1800 11547",
      website: "www.jason@.com",
      interest: "photography",
    },
    {
      id: "6",
      image: "avtar/11.jpg",
      name2: "Carlo",
      name1: "Monty",
      email: "monty@gmail.com",
      active: false,
      gender: "Male",
      day: "12",
      month: "Nov ",
      year: "1994",
      personality: "Cool",
      city: "Amreli",
      mobileno: "+0 1800 87944",
      website: "www.mon@.com",
      interest: "sports",
    },
    {
      id: "7",
      image: "avtar/16.jpg",
      name2: "Lee",
      name1: "Brock",
      email: "lee@gmail.com",
      active: false,
      gender: "Male",
      day: "8",
      month: "Dec ",
      year: "1992",
      personality: "Cool",
      city: "Ahemdabad",
      mobileno: "+0 1800 58712",
      website: "www.lee.com",
      interest: "photography",
    },
  ],
  organization: organizationType[] = [
    {
      id: 1,
      name1: "Mark",
      image: "user/user.png",
      name2: "jecno",
      email: "markjecno@gmail.com",
      active: "active show",
      gender: "Male",
    },
    {
      id: 2,
      name1: "Jason",
      image: "user/3.jpg",
      name2: "Borne",
      email: "jasonb@gmail.com",
      active: "",
      gender: "Male",
    },
    {
      id: 3,
      name1: "Sarah",
      image: "user/4.jpg",
      name2: "Loren",
      email: "barnes@gmail.com",
      active: "",
      gender: "Female",
    },
    {
      id: 4,
      name1: "Andew",
      image: "user/10.jpg",
      name2: "Jon",
      email: "andrewj@gmail.com",
      active: "",
      gender: "Female",
    },
  ],
  day: { value: string }[] = [
    { value: "01" },
    { value: "02" },
    { value: "03" },
    { value: "04" },
    { value: "05" },
    { value: "06" },
    { value: "07" },
    { value: "08" },
    { value: "09" },
    { value: "10" },
    { value: "11" },
    { value: "12" },
    { value: "13" },
    { value: "14" },
    { value: "15" },
    { value: "16" },
    { value: "17" },
    { value: "18" },
    { value: "19" },
    { value: "20" },
    { value: "21" },
    { value: "22" },
    { value: "23" },
    { value: "24" },
    { value: "25" },
    { value: "26" },
    { value: "27" },
    { value: "28" },
    { value: "29" },
    { value: "30" },
    { value: "31" }
  ],
  month: { month: string }[] = [
    { month: "January" },
    { month: "February" },
    { month: "March" },
    { month: "April" },
    { month: "May" },
    { month: "June" },
    { month: "July" },
    { month: "August" },
    { month: "September" },
    { month: "October" },
    { month: "November" },
    { month: "December" }
  ],
  starred: SentItem[] = [
    {
      img: "user/6.jpg",
      name: "Marvin McKinney",
      desctitle: "New comments on MSR2024 draft presentation - ",
      dec: "New Here's a list of all the topic challenges...",
      badgeclass: "badge-light-primary",
      badge: "new",
      time: "2:30 PM"
    },
    {
      img: "user/3.png",
      name: "Brooklyn Simmons",
      desctitle: "Confirm your booking id -",
      dec: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
      badgeclass: "badge-light-primary",
      badge: "new",
      time: "7:50 AM"
    }
  ],
  mail: MailItem[] = [
    {

      icon: "sms",

    },
    {
      svgclass: "bookmark-box ",
      icon: "bookmark",

    },
    {

      icon: "spam",

    },
    {
      svgclass: "stroke-danger",
      icon: "mail-trash",

    },
    {

      icon: "setting",

    }
  ],

  edit: FormField[] = [
    {
      class: "col-md-5",
      placeholder: "Company",
      type: "text",
      title: "Company"
    },
    {
      class: "col-sm-6 col-md-3",
      placeholder: "Username",
      type: "text",
      title: "Username"
    },
    {
      class: "col-sm-6 col-md-4",
      placeholder: "Email",
      type: "email",
      title: "Email address"
    },
    {
      class: "col-sm-6 col-md-6",
      placeholder: "First Name",
      type: "text",
      title: "First Name"
    },
    {
      class: "col-sm-6 col-md-6",
      placeholder: "Last Name",
      type: "text",
      title: "Last Name"
    },
    {
      class: "col-md-12",
      placeholder: "Home Address",
      type: "text",
      title: "Address"
    },
    {
      class: "col-sm-6 col-md-4",
      placeholder: "City",
      type: "text",
      title: "City"
    },
    {
      class: "col-sm-6 col-md-3",
      placeholder: "ZIP Code",
      type: "number",
      title: "Postal Code"
    }
  ],
  country: count[] = [
    {
      title: "--Select--"
    },
    {
      title: "Germany"
    },
    {
      title: "Canada"
    },
    {
      title: "Usa"
    },
    {
      title: "Aus"
    }
  ]
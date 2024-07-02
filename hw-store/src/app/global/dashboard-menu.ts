import { SectionMenu } from "./object-menu";
import { faBoxes, faChartBar, faShoppingCart, faTruck, faUserFriends, faWarehouse } from '@fortawesome/free-solid-svg-icons';

let iconFaShop = faShoppingCart;
let iconFaOrder = faTruck;
let iconFaInventory = faBoxes;
let iconFaUser = faUserFriends;
let iconFaReports = faChartBar;
let iconFaInventoryAdmin = faWarehouse;

export let menuLinks: Array<SectionMenu> = [
    {
        id: 1,
        section: 'Tienda',
        subSections: [
            {
                id: 1,
                name: 'Ventas',
                credentials: ['ADMIN'],
                show: true,
                icon: iconFaShop,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Realizar Venta'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: false,
                        name: 'Modificar Venta'
                    },
                    {
                        id: 3,
                        link: '',
                        selected: false,
                        name: 'Reintegrar Producto'
                    },
                    {
                        id: 4,
                        link: '',
                        selected: false,
                        name: 'Sugerencias'
                    },
                ]
            },
            {
                id: 2,
                name: 'Pedido',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaOrder,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Realizar Pedido'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: false,
                        name: 'Modificar Pedido'
                    },
                    {
                        id: 3,
                        link: '',
                        selected: false,
                        name: 'Lista de Pedidos Pendientes'
                    }
                ]
            },
            {
                id: 3,
                name: 'Clientes',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaUser,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Pendientes de Pago'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        section: 'Productos',
        subSections: [
            {
                id: 1,
                name: 'Inventario',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaInventory,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Lista de Productos'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: false,
                        name: 'Buscar Productos'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        section: 'Administracion',
        subSections: [
            {
                id: 1,
                name: 'Usuarios',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaUser,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Administrar Usuarios'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: false,
                        name: 'Agregar Usuario'
                    },
                    {
                        id: 3,
                        link: '',
                        selected: false,
                        name: 'Lista Usuarios'
                    }
                ]
            },
            {
                id: 2,
                name: 'Reportes',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaReports,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Reporte de Ventas'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: false,
                        name: 'Reporte de Ventas por Usuario'
                    },
                    {
                        id: 3,
                        link: '',
                        selected: false,
                        name: 'Reporte de Ventas por Cliente'
                    },
                    {
                        id: 4,
                        link: '',
                        selected: false,
                        name: 'Reporte de Clientes'
                    },
                    {
                        id: 5,
                        link: '',
                        selected: false,
                        name: 'Reporte de Pedidos'
                    },
                    {
                        id: 6,
                        link: '',
                        selected: false,
                        name: 'Reporte de Logs'
                    },
                    {
                        id: 7,
                        link: '',
                        selected: false,
                        name: 'Reporte General'
                    }
                ]
            },
            {
                id: 3,
                name: 'Inventario',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaInventoryAdmin,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Inventario'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: false,
                        name: 'Agregar Producto'
                    },
                    {
                        id: 3,
                        link: '',
                        selected: false,
                        name: 'Ingreso de Productos'
                    },
                    {
                        id: 4,
                        link: '',
                        selected: false,
                        name: 'Productos de Entrega'
                    },
                    {
                        id: 5,
                        link: '',
                        selected: false,
                        name: 'Categorias'
                    },
                    {
                        id: 6,
                        link: '',
                        selected: false,
                        name: 'Marcas'
                    }
                ]
            }
        ]
    },
]

/*

let menuLinks: Array<SectionMenu> = [
    {
        id: 1,
        section: 'Tienda',
        subSections: [
            {
                id: 1,
                name: 'Ventas',
                credentials: ['ADMIN'],
                show: true,
                icon: ,
                links: [
                    {
                        id: 1,
                        link: '',
                        selected: false,
                        name: 'Realizar Venta'
                    },
                    {
                        id: 2,
                        link: '',
                        selected: true,
                        name: 'Modificar Venta'
                    },
                    {
                        id: 3,
                        link: '',
                        selected: false,
                        name: 'Reintegrar Producto'
                    },
                    {
                        id: 4,
                        link: '',
                        selected: false,
                        name: 'Sugerencias'
                    },
                ]
            }
        ]
    }
]

*/
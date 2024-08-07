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
        roles: ['ADMIN', 'RECEPTIONIST'],
        subSections: [
            {
                id: 1,
                name: 'Ventas',
                credentials: ['ADMIN'],
                show: false,
                icon: iconFaShop,
                links: [
                    {
                        id: 1,
                        link: '/home/store/make-sale',
                        selected: false,
                        name: 'Realizar Venta'
                    },
                    {
                        id: 2,
                        // link: '/store/test',
                        link: '/home/store/modify-sales',
                        selected: false,
                        name: 'Modificar Venta'
                    },
                    {
                        id: 3,
                        link: '/home/store/refound-products',
                        selected: false,
                        name: 'Reintegrar Producto'
                    },
                    {
                        id: 4,
                        link: '/home/store/suggestions',
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
                        link: '/orders',
                        selected: false,
                        name: 'Realizar Pedido'
                    },
                    {
                        id: 2,
                        link: '/orders/modify-orders',
                        selected: false,
                        name: 'Modificar Pedido'
                    },
                    {
                        id: 3,
                        link: '/orders/pending-orders',
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
                        link: '/clients/pay-pendign',
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
        roles: ['ADMIN', 'OPERATOR'],
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
                        link: '/products',
                        selected: false,
                        name: 'Lista de Productos'
                    },
                    {
                        id: 2,
                        link: '/products/search',
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
        roles: ['ADMIN'],
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
                        link: '/home/admin/admin-users',
                        selected: false,
                        name: 'Administrar Usuarios'
                    },
                    {
                        id: 2,
                        link: '/home/admin/add-users',
                        selected: false,
                        name: 'Agregar Usuario'
                    },
                    {
                        id: 3,
                        link: '/home/admin/users',
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
                        link: '/home/admin/report/sales',
                        selected: false,
                        name: 'Reporte de Ventas'
                    },
                    {
                        id: 2,
                        link: '/home/admin/report/sales-for-user',
                        selected: false,
                        name: 'Reporte de Ventas por Usuario'
                    },
                    {
                        id: 3,
                        link: '/home/admin/report/sales-for-client',
                        selected: false,
                        name: 'Reporte de Ventas por Cliente'
                    },
                    {
                        id: 4,
                        link: '/home/admin/report/clients',
                        selected: false,
                        name: 'Reporte de Clientes'
                    },
                    {
                        id: 5,
                        link: '/home/admin/report/orders',
                        selected: false,
                        name: 'Reporte de Pedidos'
                    },
                    {
                        id: 6,
                        link: '/home/admin/report/logs',
                        selected: false,
                        name: 'Reporte de Logs'
                    },
                    {
                        id: 7,
                        link: '/home/admin/report',
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
                        link: '/home/admin/inventory/inventory',
                        selected: false,
                        name: 'Inventario'
                    },
                    {
                        id: 2,
                        link: '/home/admin/inventory/add-products',
                        selected: false,
                        name: 'Agregar Producto'
                    },
                    {
                        id: 3,
                        link: '/home/admin/inventory/income-products',
                        selected: false,
                        name: 'Ingreso de Productos'
                    },
                    {
                        id: 4,
                        link: '/home/admin/inventory/products-delivery',
                        selected: false,
                        name: 'Productos de Entrega'
                    },
                    {
                        id: 5,
                        link: '/home/admin/inventory/categories',
                        selected: false,
                        name: 'Categorias'
                    },
                    {
                        id: 6,
                        link: '/home/admin/inventory/brands',
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
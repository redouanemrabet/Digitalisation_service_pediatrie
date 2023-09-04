// assets
import { DashboardOutlined, HomeOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    HomeOutlined,
    PlusCircleOutlined,
    UserOutlined
};


// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
      /*  {
            id: 'dashboard',
            title: 'Tableau de bord',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },*/
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        },
        {
            id: 'addPatient',
            title: 'Ajouter patient',
            type: 'item',
            url: '/AddPatient',
            icon: icons.PlusCircleOutlined,
            breadcrumbs: true
        },
        {
            id: 'medcins',
            title: 'Medcins',
            type: 'item',
            url: '/Medcins',
            icon: icons.UserOutlined,
            breadcrumbs: true
        }

    ]
};
export default dashboard;

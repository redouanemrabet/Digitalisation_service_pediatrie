// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import AddPateint from '../pages/add-patient';
import Medcin from '../pages/medcin/Medcins';
import Document from '../pages/dossier-vert/Document/Upload';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, AddPateint, Medcin]
};

export default menuItems;

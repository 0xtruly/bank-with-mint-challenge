import React from 'react';
import PropTypes from 'prop-types';
import {
    AllOrders,
    AllPayments,
    ManualSettlement,
    MerchantProfile,
    Overview,
    PendingOrders,
    ReconcilledPay,
    ReconcilledOrders,
    UnreconcilledPay
} from '../icons';

const MenuIcon = ({name}) => {
    switch (name) {
        case 'AllOrders':
            return <AllOrders />;
        case 'AllPayments':
            return <AllPayments />;
        case 'Manual':
            return <ManualSettlement />;
        case 'Merchant':
            return <MerchantProfile />;
        case 'Overview':
            return <Overview />;
        case 'Pending':
            return <PendingOrders />;
        case 'ReconcilledPay':
            return <ReconcilledPay />;
        case 'ReconcilledOrders':
            return <ReconcilledOrders />;
        case 'UnreconcilledPay':
            return <UnreconcilledPay />;
    
        default:
            return <AllOrders />;
    }
}

MenuIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default MenuIcon

import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zhy1i2xs11OXlItdCxVrpfAfudlzK5zYep_7cADPEBemHEnrVnGopVpTyJEwqG-PGFMAt-oRrg8WLnii-YWY8DovkI1myClk2P7scDZajrZ56nRxAXG6bxHVg_TOYHYx'
    }
});



import { findAllCustomers } from '../models/model';

export const allCustomers = (req : any, res: any)=>{
    const allCustomersSearched = findAllCustomers();
    res.send( allCustomersSearched );
}


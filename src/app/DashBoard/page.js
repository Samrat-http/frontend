"use client"

import '../globals.css';
import '../db.css';
import { Home, Package, Users, ShoppingCart, BarChart } from 'lucide-react'
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CusChart from '@/components/CusChart'; // Import the BarChart component



export default function dashb(){
    const navItems = [
        {name: 'DashBoard' , href: '/' , icon: Home},
        {name: 'Inventory' , href: '/' , icon: Package},
        {name: 'Supppliers' , href: '/' , icon: Users},
        {name: 'Orders' , href: '/' , icon: ShoppingCart},
        {name: 'Analytics' , href: '/' , icon: BarChart},
    ]

    const data = [
        {name: "Jan" , value: 200},
        {name: "Feb" , value: 300},
        {name: "Mar" , value: 268},
        {name: "April" , value: 176},
        {name: "May" , value: 458}
    ]

    
    return(
        <div className='main'>
                <div className='heading'>
                    <div className='title'>
                        SCM
                    </div>
                    <div className='nav'>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href}>
                                    <item.icon/>   
                                    {item.name}
                                         
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            <div className='db_cont'>
                <div className='mainhead'>
                    DashBoard
                </div>
                <div className='main_cont'>
                    <div className='cards'>
                            <Card className="card1">
                                <CardHeader>
                                    <CardTitle style={{fontSize: '20px', fontWeight: '400'}}> Total Revenue</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div style={{fontSize: '25px', fontWeight: 'bold'}}>Rs. 7,02,452</div>
                                    <p>+20.1% from last month</p>
                                </CardContent>                            
                            </Card>

                            <Card className="card1">
                                <CardHeader>
                                    <CardTitle style={{fontSize: '20px', fontWeight: '400'}}> Active Orders</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div style={{fontSize: '25px', fontWeight: 'bold'}}>+573</div>
                                    <p>+46 since last hour</p>
                                </CardContent>                            
                            </Card>

                            <Card className="card1">
                                <CardHeader>
                                    <CardTitle style={{fontSize: '20px', fontWeight: '400'}}> Inventory items</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div style={{fontSize: '25px', fontWeight: 'bold'}}>1,234</div>
                                    <p>86 items low in stock</p>
                                </CardContent>                            
                            </Card>

                            <Card className="card1">
                                <CardHeader>
                                    <CardTitle style={{fontSize: '20px', fontWeight: '400'}}> Active Suppliers</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div style={{fontSize: '25px', fontWeight: 'bold'}}>73</div>
                                    <p>12 new this month</p>
                                </CardContent>                            
                            </Card>
                    </div>
                </div>
                <div className='chart'>
                   <h2 style={{fontSize: '40px' ,fontWeight: '400'}}>Monthly Revenue</h2> 
                   <CusChart data={data} />
                </div>                
            </div>
        </div>
    );
}
import {TbHeartPlus} from 'react-icons/tb'
import {RiVipCrownFill} from 'react-icons/ri'
import {BiDumbbell} from 'react-icons/bi'

export const plansData=[
    {
        icon:<TbHeartPlus />,
        name:'BASIC PLAN',
        price:'2000',
        features:[
            '2 hours of dance',
            'Free consultation to masters',
            'Access to The Community'
        ]
    },
    {
        icon:<RiVipCrownFill />,
        name:'PREMIUM PLAN',
        price:'3000',
        features:[
            '5 hours of dance',
            'Free consultation of Masters',
            'Access to minibar',
        ]
    },
    {
        icon:<BiDumbbell />,
        name: 'PRO PLAN',
        price:'4500',
        features:[
            '8 hours of dance',
            'Free consultation of private Master',
            'Free Dance Merchandises'
        ]
    }
]
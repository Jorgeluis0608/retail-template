import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

const sample = [
  {
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.retail.about
      },
      {
        name: 'team',
        link: link.retail.team
      },
      {
        name: 'blog',
        link: link.retail.blog
      },
      {
        name: 'blog detail',
        link: link.retail.blogDetail
      }
    ]
  },
  {
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.retail.login
      },
      {
        name: 'register',
        link: link.retail.register
      },
      {
        name: 'contact',
        link: link.retail.contact
      },
      {
        name: 'contact map',
        link: link.retail.contactMap
      }
    ]
  },
  {
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.retail.card
      },
      {
        name: 'product',
        link: link.retail.product
      },
      {
        name: 'product detail',
        link: link.retail.productDetail
      }
    ]
  },
  {
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.retail.pricing
      },
      {
        name: 'faq',
        link: link.retail.faq
      },
      {
        name: 'maintenance',
        link: link.retail.maintenance
      },
      {
        name: 'coming soon',
        link: link.retail.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
]

export default sample

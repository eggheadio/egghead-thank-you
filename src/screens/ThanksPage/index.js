import React from 'react'

import Icon from '../../components/Icon'

import css from './index.scss'

import imgEggo from './assets/images/eggo.svg'
import imgGiftmasWreath from './assets/images/giftmas-wreath.png'

const ThanksPage = () => (
  <div className={`lh-copy dark-blue-secondary fw4 ${css.thanksPage}`}>
    <section className='bg-white pt5 pt6-l pb4'>
      <div className={`center ph3 ph4-ns ${css.container}`}>
        <div className='pb4 pb5-ns mb4 bb b--gray-secondary'>
          <div className='flex flex-column flex-row-ns w-100'>
            <div className='order-1-ns w-50-ns flex justify-center items-start'>
              <img src={imgGiftmasWreath} alt='' className={css.imgGiftmasWreath} />
            </div>
            <div className='order-0-ns w-50-ns mt4 mt0-ns'>
              <h6 className='f6 fw4 ttu dark-gray-secondary lh-copy mt0 mb3'>You're awesome!</h6>
              <h2 className='f3 f2-m f1-l fw6 lh-title dark-blue-secondary mt0 mb4 pb2'>Thanks for purchasing an egghead gift subscription!</h2>
              <p className='mt0 mb3 pb1'>
                We have dispatched an email to the address that you’ve provided:
                <br />
                <span className='fw6'>paul.graham@gmail.com</span>
              </p>
              <p className='ma0'>The subscribtion is not yet active and you now have two options what to do with it - <span className='fw5'>A. Send as a gift to your friend</span>, colleague, granpa or B. Treat yourself. It’s up to you!</p>
            </div>
          </div>
          <div className='flex flex-column flex-row-ns w-100 mt4'>
            <div className='w-50-ns pr3-ns'>
              <h6 className='f6 fw4 ttu dark-gray-secondary lh-copy mt0 mb3 flex items-center'>
                <div className='pr2 nowrap'>Option A</div>
                <div className='w-100 flex-grow-1 bg-dark-gray-secondary' style={{height: '1px'}} />
              </h6>
              <h3 className='f3 lh-title fw6 avenir dark-blue-secondary mt0 mb3'>Send as a gift</h3>
              <p className='mt0 mb3'>The gift can be claimed by visiting the following url:</p>
              <div className='flex mb3'>
                <input type='text' value='https://egghead.io/gifts/claim/aa385b181d5411' className='br2 b--dark-gray-secondary ba dark-blue-secondary bg-white-secondary flex-grow-1 mr2 f5 lh-copy ph3 pv2' style={{height: '3rem'}} />
                <button type='button' className='f5 bg-dark-gray white nowrap br2 bn fw4 lh-copy ph3 pv2 pointer' style={{height: '3rem'}}>
                  <Icon type='link' color='white' />
                  <span className='ml1'>copy link</span>
                </button>
              </div>
              <p className='mt0 mb3 f6 dark-blue-secondary o-60 lh-copy'>Please make note of this URL. If your email doesn’t arrive for any reason, we may not be able to help you find it.</p>
              <p className='ma0'>Just send the link to a friend so he can lorem ipsum dolor sit amet.</p>
            </div>
            <div className='w-50-ns pl3-ns mt4 mt0-ns flex flex-column'>
              <h6 className='f6 fw4 ttu dark-gray-secondary lh-copy mt0 mb3 flex items-center'>
                <div className='pr2 nowrap'>Option B</div>
                <div className='w-100 flex-grow-1 bg-dark-gray-secondary' style={{height: '1px'}} />
              </h6>
              <h3 className='f3 lh-title fw6 avenir dark-blue-secondary mt0 mb3'>Treat yourself</h3>
              <p className='mt0 mb3'>The gift will be applied to this account: <span className='fw6'>paul.graham@gmail.com</span></p>
              <a href='#' className={`inline-flex items-center link pv3 ph4 white br-pill f5 fw4 lh-title avenir h3 ttu mb3 self-center self-start-ns ${css.claimCTA}`}>Claim the gift for myself</a>
              <p className='ma0 f6 dark-blue-secondary o-60 lh-copy'>This will activate a 1 year Pro Membership gift for your account and you won’t be able to send it to anyone else.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-column flex-row-ns'>
          <div className='pr2-ns mb3 mb0-ns'>Please take a moment to tell your friends:</div>
          <div>social buttons</div>
        </div>
      </div>
    </section>
    <section className='bg-white-secondary pv4 pv5-ns'>
      <div className={`center ph3 ph4-ns ${css.container}`}>
        <div className='flex w-100'>
          <div className='w-100 pb4 mb4 bb b--gray-secondary'>
            <div className='flex items-center mb3 pb2'>
              <img src={imgEggo} alt='' style={{height: '42px'}} />
              <span className='ml2 f2 lh-solid ttu base-secondary avenir fw5 pt1'>Invoice</span>
            </div>
            <ul className='list pa0 ma0 f5'>
              <li>Invoice Number: <span className='fw5'>EGG-GIFT-3553-2017</span></li>
              <li>Invoice Date: <span className='fw5'>29 November 2017</span></li>
            </ul>
          </div>
        </div>
        <div className='flex flex-column flex-row-ns w-100 mb3 mb5-ns pb3-ns'>
          <div className='w-50-ns'>
            <address className='lh-copy fs-normal'>
              egghead.io LLC
              <br />
              337 Garden Oaks Blvd #97429
              <br />
              Houston, TX 77018
              <br />
              972-992-5951
            </address>
          </div>
          <div className='w-50-ns mt4 mt0-ns'>
            <label className='fw4 f5 db mb3'>Prepared for:</label>
            <textarea className={`w-100 br2 b--gray-secondary ba dark-blue-secondary bg-white f5 lh-copy pa3 ${css.textarea}`} rows='7' placeholder='Your information&#8230;' style={{maxWidth: '380px', resize: 'none'}} />
          </div>
        </div>
        <table className='w-100 mw-100 mb6 dark-blue-secondary collapse'>
          <thead>
            <tr>
              <th className='w-50 pa2 bb b--gray-secondary f5 fw6 tl'>Description</th>
              <th className='pa2 bb b--gray-secondary f5 fw6 tl' style={{width: '200px'}}>Unit Price</th>
              <th className='pa2 bb b--gray-secondary f5 fw6 tl'>Sub-Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='pa2 h4'>egghead.io gift membership (1 year)</td>
              <td className='pa2 h4'>$135.00</td>
              <td className='pa2 h4'>$135.00</td>
            </tr>
          <tr>
            <td className='pa2 bg-gray-secondary h3' />
            <td className='pa2 bg-gray-secondary h3'>Grand Total:</td>
            <td className='pa2 bg-gray-secondary h3 fw6'>$135.00</td>
          </tr>
            <tr>
              <td colSpan='2' className='pa2 h3'></td>
              <td className='pa2 h3 ttu f5'>Paid in full</td>
            </tr>
          </tbody>
        </table>
        <div className='flex justify-center'>
          <button type='button' className='inline-flex items-center bg-dark-gray br-pill white ttu f5 mh2 fw5 lh-solid ph4 pv3 pointer'>
            <Icon type='file-o' color='white' />
            <span className='pt1 ml2'>Download pdf</span>
          </button>
          <button type='button' className='inline-flex items-center bg-dark-gray br-pill white ttu f5 mh2 fw5 lh-solid ph4 pv3 pointer'>
            <Icon type='print' color='white' />
            <span className='pt1 ml2'>Print invoice</span>
          </button>
        </div>
      </div>
    </section>
  </div>
)

export default ThanksPage

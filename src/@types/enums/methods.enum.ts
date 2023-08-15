/**
  - Working with contact lists

  getLists — get mailing lists with their codes
  createList — create a new mailing list
  updateList — change mailing list properties
  deleteList — delete the mailing list
  subscribe — subscribe the mail recipient to one or more mailing lists
  exclude — exclude the mail recipient from the mailing lists
  unsubscribe — unsubscribe the mail recipient from mailing list
  importContacts — bulk import and synchronization of contacts
  exportContacts — export contacts data
  getTotalContactsCount — get the number of contacts
  getContactCount — get the number of contacts in the list
  getContact - get information about a contact

  - Working with additional fields and tags

  getFields — get the list of user fields
  createField — create a new field
  updateField — change field parameters
  deleteField — delete a field
  getTags — get the list of user tags
  deleteTag — delete a tag

  - Creating and sending messages

  createEmailMessage — create an email for a mailing campaign
  createSmsMessage — create SMS for a campaign
  createCampaign — schedule an email or SMS campaign
  cancelCampaign — cancel a previously scheduled campaign
  getActualMessageVersion — get the actual version of the message
  sendSms — send the SMS message
  checkSms — check SMS delivery status
  sendEmail — simplified sending of individual emails
  sendTestEmail — sending test emails (to own email address)
  checkEmail — check email delivery status
  updateOptInEmail — change the text of the message with the subscription confirmation link
  getWebVersion — get a link to the web version of the message sent
  deleteMessage — delete the message
  updateEmailMessage — edit the email for a mailing campaign

  - Working with templates

  createEmailTemplate — create a message template for a mailing campaign
  updateEmailTemplate — edit the existing message template
  deleteTemplate — delete the template
  getTemplate — get template information
  getTemplates — get the list of all templates created in the system
  listTemplates — get the list of all templates without a body

  - Obtaining statistics

  getCampaignDeliveryStats — get the report on the message delivery status for a given mailing campaign
  getCampaignCommonStats — get general information on the delivery results for a given mailing campaign
  getVisitedLinks — get the click-through statistics
  getCampaigns — get the list of mailing campaigns
  getCampaignStatus — get the mailing campaign status
  getMessages — get the list of messages
  getMessage — get information about SMS or email message
  listMessages — get the list of messages without body and attachments

  - Methods for partner sites

  getCheckedEmail — get the list of confirmed/unconfirmed emails
  validateSender — confirm the return address
  register — register the user (for partner sites)
  checkUserExists — check existence of the user by login or email
  getUserInfo — get user information (for partner sites)
  getUsers — get information about users (for partner sites)
  transferMoney — transfer money to user's account (for partner sites)
  getPayments — get the list of payments made by the user (for partner sites)
  getAvailableTariffs — the method to get the list of tariffs (for partner sites)
  changeTariff — switch the user to other tariff (for partner sites)
  setSenderDomain — get the DKIM key for sender's domain
 */
export enum Methods {
  getLists = 'getLists',
  createList = 'createList',
  updateList = 'updateList',
  deleteList = 'deleteList',
  subscribe = 'subscribe',
  exclude = 'exclude',
  unsubscribe = 'unsubscribe',
  importContacts = 'importContacts',
  exportContacts = 'exportContacts',
  getTotalContactsCount = 'getTotalContactsCount',
  getContactCount = 'getContactCount',
  getContact = 'getContact',
  getFields = 'getFields',
  createField = 'createField',
  updateField = 'updateField',
  deleteField = 'deleteField',
  getTags = 'getTags',
  deleteTag = 'deleteTag',
  createEmailMessage = 'createEmailMessage',
  createSmsMessage = 'createSmsMessage',
  createCampaign = 'createCampaign',
  cancelCampaign = 'cancelCampaign',
  getActualMessageVersion = 'getActualMessageVersion',
  sendSms = 'sendSms',
  checkSms = 'checkSms',
  sendEmail = 'sendEmail',
  sendTestEmail = 'sendTestEmail',
  checkEmail = 'checkEmail',
  updateOptInEmail = 'updateOptInEmail',
  getWebVersion = 'getWebVersion',
  deleteMessage = 'deleteMessage',
  updateEmailMessage = 'updateEmailMessage',
  createEmailTemplate = 'createEmailTemplate',
  updateEmailTemplate = 'updateEmailTemplate',
  deleteTemplate = 'deleteTemplate',
  getTemplate = 'getTemplate',
  getTemplates = 'getTemplates',
  listTemplates = 'listTemplates',
  getCampaignDeliveryStats = 'getCampaignDeliveryStats',
  getCampaignCommonStats = 'getCampaignCommonStats',
  getVisitedLinks = 'getVisitedLinks',
  getCampaigns = 'getCampaigns',
  getCampaignStatus = 'getCampaignStatus',
  getMessages = 'getMessages',
  getMessage = 'getMessage',
  listMessages = 'listMessages',
  getCheckedEmail = 'getCheckedEmail',
  validateSender = 'validateSender',
  register = 'register',
  checkUserExists = 'checkUserExists',
  getUserInfo = 'getUserInfo',
  getUsers = 'getUsers',
  transferMoney = 'transferMoney',
  getPayments = 'getPayments',
  getAvailableTariffs = 'getAvailableTariffs',
  changeTariff = 'changeTariff',
  setSenderDomain = 'setSenderDomain',
}

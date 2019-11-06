"use strict";

var NetworkDetect = function NetworkDetect(phone) {
  this.phone = phone.toString().trim();
};

NetworkDetect.prototype = {
  getNetworks: function getNetworks() {
    return {
      '9mobile': ['0809', '0909', '0817', '0818', '0908'],
      mtn: ['0806', '0803', '0816', '0813', '0810', '0814', '0903', '0906', '0703', '0706'],
      glo: ['0805', '0705', '0905', '0807', '0815', '0811'],
      airtel: ['0802', '0902', '0701', '0808', '0708', '0812', '0907'],
      starcomms: ['07028', '07029', '0819'],
      visafone: ['07025', '07026', '0704'],
      multilinks: ['07027', '0709'],
      zoom: ['0707'],
      ntel: ['0804'],
      smile: ['0702']
    };
  },
  getNetworkName: function getNetworkName() {
    this.validate();
    var phone_primary_prefix = this.getPhonePrefix();
    var phone_secondary_prefix = this.getPhonePrefix(5);
    var networks = this.getNetworks();

    if (networks.mtn.includes(phone_primary_prefix)) {
      return 'MTN';
    }

    if (networks.glo.includes(phone_primary_prefix)) {
      return 'GLO';
    }

    if (networks['9mobile'].includes(phone_primary_prefix)) {
      return '9mobile';
    }

    if (networks.airtel.includes(phone_primary_prefix)) {
      return 'Airtel';
    }

    if (networks.starcomms.includes(phone_secondary_prefix) || networks.starcomms.includes(phone_primary_prefix)) {
      return 'Starcomms';
    }

    if (networks.visafone.includes(phone_secondary_prefix) || networks.visafone.includes(phone_primary_prefix)) {
      return 'Visafone';
    }

    if (networks.multilinks.includes(phone_primary_prefix) || networks.multilinks.includes(phone_secondary_prefix)) {
      return 'Multilinks';
    }

    if (networks.zoom.includes(phone_primary_prefix)) {
      return 'Zoom';
    }

    if (networks.ntel.includes(phone_primary_prefix)) {
      return 'Ntel';
    }

    if (networks.smile.includes(phone_primary_prefix)) {
      return 'Smile';
    }

    return null;
  },
  getPhonePrefix: function getPhonePrefix(length) {
    length = length || 4;
    return this.phone.substr(0, length);
  },
  validate: function validate() {
    //Check if no value is passed
    if (!this.phone) {
      throw new Error('Invalid entry, enter a telephone number');
    } //Check if number contains unwanted characters


    if (this.phone.match(/[^0-9]/)) {
      throw new Error('Number contains unwanted characters');
    } //Check if number is lesser than 11


    if (this.phone.length < 11) {
      throw new Error('Number must not be lesser than 11 digits');
    } //Check if number is greater than 11


    if (this.phone.length > 11) {
      throw new Error('Number must not be greater than 11 digits');
    }

    return true;
  }
};
//# sourceMappingURL=network-detect.js.map
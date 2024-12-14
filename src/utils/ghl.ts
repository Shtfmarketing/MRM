import { MilitaryBranch } from '../types/military';

// GHL Integration Constants
export const GHL_CUSTOM_FIELDS = {
  MILITARY_BRANCH: 'military_branch',
  CLEARANCE_LEVEL: 'security_clearance',
  MOS_CODE: 'mos_code',
  PREFERRED_CONTACT: 'preferred_contact_method',
  DEPLOYMENT_STATUS: 'deployment_status'
};

// GHL Form Integration
export const mapFormDataToGHL = (formData: any) => {
  return {
    contact: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      customFields: [
        {
          id: GHL_CUSTOM_FIELDS.MILITARY_BRANCH,
          value: formData.branch
        },
        {
          id: GHL_CUSTOM_FIELDS.CLEARANCE_LEVEL,
          value: formData.clearanceLevel
        },
        {
          id: GHL_CUSTOM_FIELDS.MOS_CODE,
          value: formData.mosCode
        }
      ]
    }
  };
};

// GHL Tracking Integration
export const initGHLTracking = () => {
  // Add GHL tracking script
  const script = document.createElement('script');
  script.src = 'https://marketplace.gohighlevel.com/js/tracking.js';
  script.async = true;
  document.head.appendChild(script);
};

// GHL Calendar Integration
export const loadGHLCalendar = (elementId: string, calendarId: string) => {
  const script = document.createElement('script');
  script.innerHTML = `
    window.GHL = window.GHL || {};
    GHL.loadCalendar({
      elementId: '${elementId}',
      calendarId: '${calendarId}'
    });
  `;
  document.body.appendChild(script);
};
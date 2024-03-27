export type ServiceType = 'ELECTRICITY' | 'GAS';

export type ServiceStatus = 'ACTIVE' | 'INACTIVE'; // Add more statuses as needed

export type MeterStatus = 'GAINING' | 'Commissioned' | 'ON_SUPPLY'; // Add more statuses as needed

interface ProductResponse {
  name: string;
  code: string;
}

interface MeterPointResponse {
  identifier: string;
  status: MeterStatus;
}

interface ServiceResponse {
  type: ServiceType;
  accountNumber: string;
  isBusiness: boolean;
  validFrom: string;
  validTo: string;
  status: ServiceStatus;
  eligibleForRenewal: boolean;
  active: boolean;
  productResponse: ProductResponse;
  meterPointResponse: MeterPointResponse;
}

interface Property {
  propertyId: string;
  address: string;
  serviceResponses: ServiceResponse[];
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  landline: string;
}

export interface UserProfile {
  properties: Property[];
  user: User;
}

export const userProfile : UserProfile = {
    "properties": [
      {
        "propertyId": "64462",
        "address": "38 Macedon Pde, Wollert, VIC 3750",
        "serviceResponses": [
          {
            "type": "ELECTRICITY",
            "accountNumber": "A-08C9CA61",
            "isBusiness": false,
            "validFrom": "2024-02-28T14:00:00.000Z",
            "validTo": "2025-01-29T14:00:00.000Z",
            "status": "ACTIVE",
            "eligibleForRenewal": false,
            "active": true,
            "productResponse": {
              "name": "Origin Basic",
              "code": "E_BASIC_0PC_VAR_AUSNET_2101"
            },
            "meterPointResponse": {
              "identifier": "6306013103",
              "status": "GAINING"
            }
          },
          {
            "type": "GAS",
            "accountNumber": "A-E58272E9",
            "isBusiness": false,
            "validFrom": "2024-02-27T14:00:00.000Z",
            "validTo": "2025-03-29T14:00:00.000Z",
            "status": "ACTIVE",
            "eligibleForRenewal": false,
            "active": true,
            "productResponse": {
              "name": "Origin Basic",
              "code": "G_OBASIC_0PC_VAR_AGNVIC_2107"
            },
            "meterPointResponse": {
              "identifier": "5320284381",
              "status": "Commissioned"
            }
          }
        ]
      },
      {
        "propertyId": "63930",
        "address": "10 Macedon Ave, Balwyn North, VIC 3104",
        "serviceResponses": [
          {
            "type": "ELECTRICITY",
            "accountNumber": "A-4C2CC8CB",
            "isBusiness": false,
            "validFrom": "2024-01-24T14:00:00.000Z",
            "validTo": "2024-03-29T14:00:00.000Z",
            "status": "ACTIVE",
            "eligibleForRenewal": true,
            "active": true,
            "productResponse": {
              "name": "Origin Go Variable",
              "code": "E_GOVARIABLE_21PC_VAR_CITIPOWER_2305"
            },
            "meterPointResponse": {
              "identifier": "6102679271",
              "status": "ON_SUPPLY"
            }
          },
          {
            "type": "GAS",
            "accountNumber": "A-88ED275E",
            "isBusiness": false,
            "validFrom": "2024-01-23T14:00:00.000Z",
            "validTo": "2025-01-23T14:00:00.000Z",
            "status": "ACTIVE",
            "eligibleForRenewal": false,
            "active": true,
            "productResponse": {
              "name": "Origin Go Variable",
              "code": "G_GOVARIABLE_12PC_VAR_MULTINET_2305"
            },
            "meterPointResponse": {
              "identifier": "5310375959",
              "status": "Commissioned"
            }
          }
        ]
      }
    ],
    "user": {
      "firstName": "Catherine Mary 11",
      "lastName": "NugenT",
      "email": "multiregister_donotdelete@origindigital-pac.com.au",
      "mobile": "+61413684701",
      "landline": "+61263302450"
    }
  }

  function sortPropertiesByNearestExpiry(userProfile) : UserProfile {
    // Function to parse date strings and return a Date object
    const parseDate = (dateString) => new Date(dateString);
  
    // Function to find the nearest to expiry service for a property
    const findNearestExpiryService = (serviceResponses) => {
      return serviceResponses.reduce((earliest, current) => {
        const currentExpiry = parseDate(current.validTo);
        return currentExpiry < earliest ? currentExpiry : earliest;
      }, new Date("2099-03-29T14:00:00.000Z")); // Use a far future date as initial value
    };
  
    // Sort the properties array
    userProfile.properties.sort((a, b) => {
      const aNearestExpiry = findNearestExpiryService(a.serviceResponses);
      const bNearestExpiry = findNearestExpiryService(b.serviceResponses);
      return aNearestExpiry - bNearestExpiry; 
    });
  
    return userProfile; // Return the sorted properties
  }
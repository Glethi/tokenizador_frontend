export const breakerTypes = {
    header: 'header',
    type: 'type',
    BitMap: 'bitmap',
    SecBitmap: 'P-1',
    PrimaryAccountNumber: 'P-2',
    ProccesingCode: 'P-3',
    TransactionAmount: 'P-4',
    SettlementAmount: 'P-5',
    CardholderBillingAmount: 'P-6',
    TransmissionDateTime: 'P-7',
    CardholderBillingFeeAmount: 'P-8',
    SettlementConversionDate: 'P-9',
    CardholderBillingConvRate: 'P-10',
    SystemTraceAuditNumber: 'P-11',
    LocalTransactionTime: 'P-12',
    LocalTransactionDate: 'P-13',
    ExpirationDate: 'P-14',
    SettlementDate: 'P-15',
    ConversionDate: 'P-16',
    CaptureDate: 'P-17',
    MerchantType: 'P-18',
    AcquiringInstitutionCountryCode: 'P-19',
    CountryCodePrimaryAccount: 'P-20',
    ForwardingCountryCode: 'P-21',
    POSEntryMode: 'P-22',
    CardSequenceNumber: 'P-23',
    NetworkInternationalIdentifier: 'P-24',
    POSConditionCode: 'P-25',
}

export const messageTypes = [
    '0200',
    '0210',
    '0220',
    '0230',
    '0420',
    '0430',
    '0800',
    '0810'
]

export const proccesingCode = [
    {
        firstField: [
            '00',
            '01',
            '02',
            '04',
            '09',
            '14',
            '17',
            '19',
            '20',
            '22',
            '25',
            '28',
            '30',
            '31',
            '40',
            '48',
            '50',
            '51',
            '65',
            '80',
            '81',
            '98',
            '99',
        ],
        secondField: [
            '00',
            '10',
            '20',
            '30',
        ]
    }
]

export const entryModeValues = [
    {
        firstField: [
            '00',
            '01',
            '02',
            '05',
            '07',
            '80',
            '81',
            '90',
            '91',
        ],
        secondField: [
            '0',
            '1',
            '2',
            '8',
        ]
    }
]
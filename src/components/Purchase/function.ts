export function getTextOrderStatus(statusId: any) {
    if (statusId == 0) return 'ยังไม่ชำระเงิน'
    else if (statusId == 1) return 'ชำระเงินแล้ว'
    else if (statusId == 2) return 'เตรียมผลิตภัณฑ์'
    else if (statusId == 3) return 'จัดส่งผลิตภัณฑ์'
    else if (statusId == 4) return 'ยกเลิก'
    else return 'error'
}

export function getClassOrderStatus(statusId: any) {
    if (statusId == 0) return 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500'
    else if (statusId == 1) return 'bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'
    else if (statusId == 2) return 'bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400'
    else if (statusId == 3) return 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'
    else if (statusId == 4) return 'bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400'
    else return 'error'
}
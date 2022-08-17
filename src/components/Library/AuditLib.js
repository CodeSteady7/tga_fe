const auditStatus = (audit_status: number): string => {
	let status = '';
	switch (audit_status) {
		case 1:
		case '1':
		default:
			status = 'open';
			break;
		case '2':
		case 2:
			status = 'request';
			break;
		case '3':
		case 3:
			status = 'approve';
			break;
		case 4:
		case '4':
			status = 'finish';
			break;
	}
	return status;
};

const isOpen = (date): boolean => {
	return new Date() >= new Date(date) ? true : false;
};

const isAuditorMenuShown = (audit_status: number): boolean => {
	return audit_status == 2 ? true : false;
};

const isAuditeeMenuShown = (audit_status: number): boolean => {
	return audit_status == 1 ? true : false;
};

const formattedStatus = (status: string): string => {
	let badge = '';

	switch (status) {
		case 1:
		case '1':
		default:
			badge = `<span className="badge alert-primary">Open</span>`;
			break;
		case 2:
		case '2':
			badge = `<span className="badge alert-info">Request</span>`;
			break;
		case 3:
		case '3':
			badge = `<span className="badge alert-primary">Approve</span>`;
			break;
		case 4:
		case '4':
			badge = `<span className="badge alert-success">Selesai</span>`;
			break;
	}

	return badge;
};

const formattedText = (isOpen: boolean, status: string): string => {
	let badge = '';
	if (!isOpen) {
		badge = `<span className="badge alert-warning">Belum Dibuka</span>`;
	} else {
		switch (status) {
			case 'open':
			default:
				badge = `<span className="badge alert-primary">Open</span>`;
				break;
			case 'request':
				badge = `<span className="badge alert-info">Request</span>`;
				break;
			case 'approve':
				badge = `<span className="badge alert-primary">Approve</span>`;
				break;
			case 'finish':
				badge = `<span className="badge alert-success">Selesai</span>`;
				break;
		}
	}
	return badge;
};

const findingCatgoryText = (type: String) => {
	let typeTextFormat = '';
	switch (type) {
		case 'observasi':
		default:
			typeTextFormat = 'Observasi';
			break;
		case 'kts_minor':
			typeTextFormat = 'Kts Minor';
			break;
		case 'kts_mayor':
			typeTextFormat = 'Kts Mayor';
			break;
	}

	return typeTextFormat;
};

const auditRejectedStatus = (status: boolean) => {
	if (status) {
		return `<span className="badge alert-success">Telah Diinput</span>`;
	} else {
		return `<span className="badge alert-danger">Belum Diinput</span>`;
	}
};

const AuditLib = {
	auditStatus,
	isOpen,
	formattedText,
	isAuditeeMenuShown,
	isAuditorMenuShown,
	findingCatgoryText,
	auditRejectedStatus,
	formattedStatus,
};

export default AuditLib;

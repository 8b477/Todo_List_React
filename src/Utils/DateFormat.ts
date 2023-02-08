
const dateTime: Date = new Date();

export const LOCALDATE: String = dateTime.toLocaleString('fr-FR',
    {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

export const LOCALTIME: String = dateTime.toLocaleString('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});
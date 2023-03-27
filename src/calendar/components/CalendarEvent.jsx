

export const CalendarEvent = ({events}) => {

    const { title, user } = events;

    return (
        <>
            <strong>{ title }</strong>
            <span> - { user.name }</span>
        </>
    )

}
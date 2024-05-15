import IUser from "./IUser"

interface IAppointment {
    id: number,
    date: string,
    time: string,
    userId: number,
    status: "active" | "cancelled"
}

export default IAppointment;
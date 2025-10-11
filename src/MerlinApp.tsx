import { RouterProvider } from 'react-router'
import { router } from './AppRouter'

const MerlinApp = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MerlinApp
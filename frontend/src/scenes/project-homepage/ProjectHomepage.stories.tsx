import { useEffect } from 'react'
import { Meta } from '@storybook/react'
import { mswDecorator } from '~/mocks/browser'
import { App } from 'scenes/App'
import { router } from 'kea-router'
import { urls } from 'scenes/urls'

const meta: Meta = {
    title: 'Scenes-App/Project Homepage',
    decorators: [
        mswDecorator({
            get: {
                '/api/projects/:team_id/dashboards/': require('../dashboard/__mocks__/dashboards.json'),
                '/api/projects/:team_id/dashboards/1/': require('../dashboard/__mocks__/dashboard1.json'),
                '/api/projects/:team_id/dashboards/1/collaborators/': [],
            },
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        testOptions: {
            excludeNavigationFromSnapshot: true,
        },
        viewMode: 'story',
        mockDate: '2023-02-01',
    },
}
export default meta
export const ProjectHomepage = (): JSX.Element => {
    useEffect(() => {
        router.actions.push(urls.projectHomepage())
    }, [])
    return <App />
}

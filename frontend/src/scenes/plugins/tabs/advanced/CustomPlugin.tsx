import { useActions, useValues } from 'kea'
import { pluginsLogic } from 'scenes/plugins/pluginsLogic'
import { PluginInstallationType } from 'scenes/plugins/types'
import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'
import { LemonButton, LemonInput } from '@posthog/lemon-ui'

export function CustomPlugin(): JSX.Element {
    const { customPluginUrl, pluginError, loading } = useValues(pluginsLogic)
    const { setCustomPluginUrl, installPlugin } = useActions(pluginsLogic)

    return (
        <div className="border rounded p-4">
            <Title level={5}>Install from GitHub, GitLab or npm</Title>
            <Paragraph>
                To install a third-party or custom app, paste its URL below. For{' '}
                <a
                    href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                {', '}
                <a
                    href="https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitLab
                </a>
                {' and '}
                <a
                    href="https://docs.npmjs.com/creating-and-viewing-access-tokens"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    npm
                </a>{' '}
                private repositories, append <code>?private_token=TOKEN</code> to the end of the URL.
                <br />
                <b className="text-warning">Warning: Only install apps from trusted sources.</b>
            </Paragraph>

            <div className="flex flex-1 space-x-2">
                <LemonInput
                    value={customPluginUrl}
                    disabled={loading}
                    onChange={(value) => setCustomPluginUrl(value)}
                    placeholder="https://github.com/user/repo"
                    fullWidth={true}
                    size="small"
                />
                <LemonButton
                    disabledReason={loading || !customPluginUrl ? 'Enter a plugin URL' : undefined}
                    loading={loading}
                    onClick={() => installPlugin(customPluginUrl, PluginInstallationType.Custom)}
                    size="small"
                    status="muted"
                    type="secondary"
                >
                    Fetch and install
                </LemonButton>
            </div>
            {pluginError ? <p style={{ color: 'var(--red)', marginTop: 10 }}>{pluginError}</p> : null}
        </div>
    )
}

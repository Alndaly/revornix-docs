import nextra from 'nextra'

const withNextra = nextra({
    defaultShowCopyCode: true,
    // ... other Nextra config options
    mdxOptions: {
        rehypePrettyCodeOptions: {
            theme: {
                dark: 'nord',
                light: 'min-light'
            }
        }
    }
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
    // ... Other Next.js config options

})
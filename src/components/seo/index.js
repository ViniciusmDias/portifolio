import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, pathname, article, lang }) => (
	<StaticQuery
		query={query}
		render={({
			site: {
				siteMetadata: {
					defaultTitle,
					titleTemplate,
					defaultDescription,
					siteUrl,
					defaultImage,
					twitterUsername,
				},
			},
		}) => {
			const seo = {
				title: title || defaultTitle,
				description: description || defaultDescription,
				image: `${siteUrl}${image || defaultImage}`,
				url: `${siteUrl}${pathname || "/"}`,
			}
			return (
				<>
					<Helmet
						title={seo.title}
						titleTemplate={titleTemplate}
						htmlAttributes={{
							lang,
						}}
					>
						<meta
							name="google-site-verification"
							content="FdK0L5prquMXg4djTcVSAth67wA8GbJCciJs9q5ZBew"
						/>
						<meta name="description" content={seo.description} />
						<meta name="image" content={seo.image} />
						<meta charSet="utf-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
						/>
						{seo.url && <meta property="og:url" content={seo.url} />}
						{(article ? true : null) && (
							<meta property="og:type" content="article" />
						)}
						<meta property="og:type" content="website" />

						{seo.title && <meta property="og:title" content={seo.title} />}
						{seo.description && (
							<meta property="og:description" content={seo.description} />
						)}
						{seo.image && (
							<meta
								property="og:image"
								content="https://covidbreakingnews.netlify.app/img/profiles/vinidias/vinidias.png"
							/>
						)}

						{seo.image && <meta property="og:image:url" content={seo.image} />}

						{seo.image && (
							<meta property="og:image:type" content="image/jpeg" />
						)}
						<meta name="twitter:card" content="summary_large_image" />
						{twitterUsername && (
							<meta name="twitter:creator" content={twitterUsername} />
						)}
						{seo.title && <meta name="twitter:title" content={seo.title} />}
						{seo.description && (
							<meta name="twitter:description" content={seo.description} />
						)}
						{seo.image && <meta name="twitter:image" content={seo.image} />}
					</Helmet>
				</>
			)
		}}
	/>
)
export default SEO
SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	pathname: PropTypes.string,
	article: PropTypes.bool,
}
SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	pathname: null,
	article: false,
	lang: `en`,
}
const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
				defaultImage: image
				twitterUsername
			}
		}
	}
`

const { __ } = wp.i18n; // Import __() from wp.i18n

const {
	Fragment,
} = wp.element;

const {
	PanelBody,
	SelectControl,
	ResponsiveWrapper,
	Button,
	RangeControl,
	ToggleControl,
} = wp.components;

const {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;

export default ( props ) => {
	//props.className correspond à wp-block-blockbox-section
	// TODO intégrer les vidéos
	// <video src="URL.mp4" autoplay loop muted></video>
	const {
		attributes,
		setAttributes,
		clientId,
		insertBlocksAfter,
		className,
	} = props;

	const onSelectBgImage = ( media ) => {
		setAttributes( {
			bgImage: {
				id: media.id,
				image: media.sizes.full,
				sizes: media.sizes,
			},
		} );
	};

	const onRemoveBgImage = () => {
		setAttributes( {
			bgImage: null,
		} );
	};

	const {
		bgColor,
		txtColor,
		bgImage,
		bgOptions,
	} = attributes;

	let imageClassName = 'section__image';
	imageClassName += ' section__image--' + bgOptions.position;
	if ( bgOptions.stretch || bgOptions.fixed ) {
		imageClassName += ' section__image--stretched';
	}
	if ( bgOptions.fixed ) {
		imageClassName += ' section__image--fixed';
	}

	return (
		<Fragment>
			<InspectorControls key={
				clientId + '_inspector'
			} >
				<PanelColorSettings
					title={
						'Couleurs'
					}
					colorSettings={
						[ {
							value: bgColor,
							label: __( 'Background Color' ),
							onChange: ( colorValue ) => setAttributes( {
								bgColor: colorValue,
							} ),
						},
						{
							value: txtColor,
							label: __( 'Text Color' ),
							onChange: ( colorValue ) => setAttributes( {
								txtColor: colorValue,
							} ),
						},
						]
					}
				/>
				<PanelBody
					title={
						__( 'Image' )
					}
					initialOpen={
						false
					} >
					{ ! bgImage &&
					<div >
						<MediaUpload
							title={
								__( 'Set background image' )
							}
							onSelect={
								onSelectBgImage
							}
							allowedTypes={
								[ 'image' ]
							}
							modalClass="editor-post-featured-image__media-modal"
							render={
								( {
									open,
								} ) => ( <Button className="editor-post-featured-image__toggle"
									onClick={
										open
									} > {
										__( 'Set background image' )
									} </Button>
								)
							}
						/> </div>
					} {
						!! bgImage && <MediaUpload
							title={
								__( 'Set background image' )
							}
							onSelect={
								onSelectBgImage
							}
							allowedTypes={
								[ 'image' ]
							}
							value={
								bgImage.id
							}
							modalClass="editor-post-featured-image__media-modal"
							render={
								( {
									open,
								} ) => ( <div className="blockbox-section__imageSelector" >
									<Button className="editor-post-featured-image__preview"
										onClick={
											open
										} >
										<img src={
											bgImage.sizes.medium.url
										}
										alt={
											__( 'BG Image' )
										}
										/>
										<ResponsiveWrapper naturalWidth={
											bgImage.sizes.medium.width
										}
											naturalHeight={
											bgImage.sizes.medium.height
										} >
											<img src={
												bgImage.sizes.medium.url
											}
											alt={
												__( 'BG Image' )
											}
											/> </ResponsiveWrapper> </Button> <Button onClick={
										onRemoveBgImage
									}
									isLink isDestructive > {
											__( 'Remove background image' )
										} </Button> </div>
								)
							}
						/>
					} {
						!! bgImage && <div className="section-bg-settings" >
							<RangeControl
								label={
									__( 'Opacity' )
								}
								value={
									bgOptions.opacity * 100
								}
								onChange={
									( nextOpacity ) => {
										setAttributes( {
											bgOptions: {
												...bgOptions,
												opacity: nextOpacity / 100,
											},
										} );
									}
								}
								min={
									0
								}
								max={
									100
								}
								step={
									10
								}
							/> <ToggleControl
								label={
									__( 'Fixed Background' )
								}
								checked={
									!! bgOptions.fixed
								}
								onChange={
									( nextFixed ) => {
										setAttributes( {
											bgOptions: {
												...bgOptions,
												fixed: nextFixed,
											},
										} );
									}
								}
							/> {
								! bgOptions.fixed && <ToggleControl
									label={
										__( 'Stretch Background' )
									}
									checked={
										!! bgOptions.stretch
									}
									onChange={
										( nextStretch ) => {
											setAttributes( {
												bgOptions: {
													...bgOptions,
													stretch: nextStretch,
												},
											} );
										}
									}
								/>
							} {
								( !! bgImage ) && <SelectControl
									label={
										__( 'Image position' )
									}
									value={
										bgOptions.position
									}
									onChange={
										( position ) => {
											setAttributes( {
												bgOptions: {
													...bgOptions,
													position: position,
												},
											} );
										}
									}
									options={
										[
											{
												value: 'top-left',
												label: 'Top Left',
											},
											{
												value: 'top-center',
												label: 'Top Center',
											},
											{
												value: 'top-right',
												label: 'Top Right',
											},
											{
												value: 'center-left',
												label: 'Center Left',
											},
											{
												value: 'center-center',
												label: 'Center Center',
											},
											{
												value: 'center-right',
												label: 'Center Right',
											},
											{
												value: 'bottom-left',
												label: 'Bottom Left',
											},
											{
												value: 'bottom-center',
												label: 'Bottom Center',
											},
											{
												value: 'bottom-right',
												label: 'Bottom Right',
											},
										]
									}
								/>
							} </div> }
				</PanelBody>

			</InspectorControls>
			<section className={
				className
			}
			style={
				{
					backgroundColor: bgColor,
					color: txtColor,
				}
			}
			key={
				clientId + '_section'
			} >
				{
					!! bgImage && <div
						className={
							imageClassName
						}
						style={
							{
								backgroundImage: bgImage ? 'url(' + bgImage.image.url + ')' : undefined,
								opacity: bgOptions.opacity,
							}
						}
					/> }
				{
					typeof insertBlocksAfter !== 'undefined' ?
						<InnerBlocks
							renderAppender={
								() => <InnerBlocks.ButtonBlockAppender />
							}
						/> :
						null
				} </section>
		</Fragment>
	);
};


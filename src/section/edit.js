import {
	optionsPosition,
	imageClassName,
	sectionClassName,
} from './helpers.js';

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
	const onSelectBgVideo = ( media ) => {
		setAttributes( {
			bgVideo: {
				id: media.id,
				video: media.url,
				mime: media.mime,
				file: {
					name: media.filename,
					length: media.fileLengthHumanReadable,
					size: media.filesizeHumanReadable,
				},
			},
		} );
	};

	const onRemoveBgVideo = () => {
		setAttributes( {
			bgVideo: null,
		} );
	};

	const {
		bgColor,
		txtColor,
		bgImage,
		bgOptions,
		bgVideo,
	} = attributes;

	return (
		<Fragment>
			<InspectorControls key={
				clientId + '_inspector'
			} >
				<PanelColorSettings
					title={
						__( 'Color', 'blockbox' )
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
								__( 'Set background image', 'blockbox' )
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
										__( 'Set background image', 'blockbox' )
									} </Button>
								)
							}
						/> </div>
					} {
						!! bgImage && <MediaUpload
							title={
								__( 'Set background image', 'blockbox' )
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
											__( 'Remove background image', 'blockbox' )
										} </Button> </div>
								)
							}
						/>
					} {
						!! bgImage && <div className="section-bg-settings" >
							<RangeControl
								label={
									__( 'Opacity', 'blockbox' )
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
										__( 'Stretched Background' )
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
										__( 'Image position', 'blockbox' )
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
										optionsPosition
									}
								/>
							} </div> }
				</PanelBody>

				<PanelBody
					title={
						__( 'Video' )
					}
					initialOpen={
						false
					} >
					<div>
						{
							!! bgVideo && <p> <strong> {
								`${ bgVideo.file.name } - ${ bgVideo.file.length } - ${ bgVideo.file.size }`
							} </strong></p >
						}
						<MediaUpload
							title={
								! bgVideo ? __( 'Set background Video', 'blockbox' ) : __( 'Replace Video', 'blockbox' )
							}
							onSelect={
								onSelectBgVideo
							}
							allowedTypes={
								[ 'video' ]
							}
							modalClass="editor-post-featured-image__media-modal"
							render={
								( {
									open,
								} ) => ( <Button className="editor-post-featured-image__toggle"
									onClick={
										open
									} > {
										! bgVideo ? __( 'Set background Video', 'blockbox' ) : __( 'Replace Video', 'blockbox' )
									} </Button>
								)
							}
						/>
						{
							!! bgVideo && <p><Button onClick={
								onRemoveBgVideo
							}
								isLink isDestructive > {
									__( 'Remove background video', 'blockbox' )
								} </Button></p >
						}
					</div>
					{
						!! bgVideo && <div className="section-bg-settings" >
							<RangeControl
								label={
									__( 'Opacity', 'blockbox' )
								}
								value={
									bgOptions.opacityVideo * 100
								}
								onChange={
									( nextOpacity ) => {
										setAttributes( {
											bgOptions: {
												...bgOptions,
												opacityVideo: nextOpacity / 100,
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
							/>
						</div> }
				</PanelBody>
			</InspectorControls>
			<section className={
				sectionClassName( className, bgVideo, bgImage )
			}
			style={
				{
					backgroundColor: bgColor,
					color: txtColor,
				} }
				key={
				clientId + '_section'
			} >
				{
					!! bgImage && <div
						className={
							imageClassName( bgOptions )
						}
						style={
							{
								backgroundImage: bgImage ? 'url("' + bgImage.image.url + '")' : undefined,
								opacity: bgOptions.opacity,
							}
						}
					/>
				}
				{
					!! bgVideo && <div className="section__video"
						style={
							{
								opacity: bgOptions.opacityVideo,
							}
						} > <video muted loop autoPlay >
							<source src={
								bgVideo.video
							}
							type={
								bgVideo.mime
							} />
						</video></div>
				}
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


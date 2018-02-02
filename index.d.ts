export as namespace CSS;

export interface StandardProperties<TLength = string> {
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  animation?: AnimationProperty;
  animationDelay?: AnimationDelayProperty;
  animationDirection?: AnimationDirectionProperty;
  animationDuration?: AnimationDurationProperty;
  animationFillMode?: AnimationFillModeProperty;
  animationIterationCount?: AnimationIterationCountProperty;
  animationName?: AnimationNameProperty;
  animationPlayState?: AnimationPlayStateProperty;
  animationTimingFunction?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  azimuth?: AzimuthProperty;
  backdropFilter?: BackdropFilterProperty;
  backfaceVisibility?: BackfaceVisibilityProperty;
  background?: BackgroundProperty;
  backgroundAttachment?: BackgroundAttachmentProperty;
  backgroundBlendMode?: BackgroundBlendModeProperty;
  backgroundClip?: BackgroundClipProperty;
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundOrigin?: BackgroundOriginProperty;
  backgroundPosition?: BackgroundPositionProperty;
  backgroundPositionX?: BackgroundPositionXProperty;
  backgroundPositionY?: BackgroundPositionYProperty;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundSize?: BackgroundSizeProperty<TLength>;
  blockSize?: BlockSizeProperty;
  border?: BorderProperty<TLength>;
  borderBlockEnd?: BorderBlockEndProperty;
  borderBlockEndColor?: BorderBlockEndColorProperty;
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  borderBlockEndWidth?: BorderBlockEndWidthProperty;
  borderBlockStart?: BorderBlockStartProperty;
  borderBlockStartColor?: BorderBlockStartColorProperty;
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  borderBlockStartWidth?: BorderBlockStartWidthProperty;
  borderBottom?: BorderBottomProperty<TLength>;
  borderBottomColor?: BorderBottomColorProperty;
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  borderBottomStyle?: BorderBottomStyleProperty;
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  borderCollapse?: BorderCollapseProperty;
  borderColor?: BorderColorProperty;
  borderImage?: BorderImageProperty;
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  borderImageRepeat?: BorderImageRepeatProperty;
  borderImageSlice?: BorderImageSliceProperty;
  borderImageSource?: BorderImageSourceProperty;
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  borderInlineEnd?: BorderInlineEndProperty;
  borderInlineEndColor?: BorderInlineEndColorProperty;
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  borderInlineEndWidth?: BorderInlineEndWidthProperty;
  borderInlineStart?: BorderInlineStartProperty;
  borderInlineStartColor?: BorderInlineStartColorProperty;
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  borderInlineStartWidth?: BorderInlineStartWidthProperty;
  borderLeft?: BorderLeftProperty<TLength>;
  borderLeftColor?: BorderLeftColorProperty;
  borderLeftStyle?: BorderLeftStyleProperty;
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  borderRadius?: BorderRadiusProperty<TLength>;
  borderRight?: BorderRightProperty<TLength>;
  borderRightColor?: BorderRightColorProperty;
  borderRightStyle?: BorderRightStyleProperty;
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  borderSpacing?: BorderSpacingProperty;
  borderStyle?: BorderStyleProperty;
  borderTop?: BorderTopProperty<TLength>;
  borderTopColor?: BorderTopColorProperty;
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  borderTopStyle?: BorderTopStyleProperty;
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  borderWidth?: BorderWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  boxAlign?: BoxAlignProperty;
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxDirection?: BoxDirectionProperty;
  boxFlex?: BoxFlexProperty;
  boxFlexGroup?: BoxFlexGroupProperty;
  boxLines?: BoxLinesProperty;
  boxOrdinalGroup?: BoxOrdinalGroupProperty;
  boxOrient?: BoxOrientProperty;
  boxPack?: BoxPackProperty;
  boxShadow?: BoxShadowProperty;
  boxSizing?: BoxSizingProperty;
  breakAfter?: BreakAfterProperty;
  breakBefore?: BreakBeforeProperty;
  breakInside?: BreakInsideProperty;
  captionSide?: CaptionSideProperty;
  caretColor?: CaretColorProperty;
  clear?: ClearProperty;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  color?: ColorProperty;
  columnCount?: ColumnCountProperty;
  columnFill?: ColumnFillProperty;
  columnGap?: ColumnGapProperty<TLength>;
  columnRule?: ColumnRuleProperty;
  columnRuleColor?: ColumnRuleColorProperty;
  columnRuleStyle?: ColumnRuleStyleProperty;
  columnRuleWidth?: ColumnRuleWidthProperty;
  columnSpan?: ColumnSpanProperty;
  columnWidth?: ColumnWidthProperty<TLength>;
  columns?: ColumnsProperty;
  contain?: ContainProperty;
  content?: ContentProperty;
  counterIncrement?: CounterIncrementProperty;
  counterReset?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  displayInside?: DisplayInsideProperty;
  displayList?: DisplayListProperty;
  displayOutside?: DisplayOutsideProperty;
  emptyCells?: EmptyCellsProperty;
  filter?: FilterProperty;
  flex?: FlexProperty;
  flexBasis?: FlexBasisProperty;
  flexDirection?: FlexDirectionProperty;
  flexFlow?: FlexFlowProperty;
  flexGrow?: FlexGrowProperty;
  flexShrink?: FlexShrinkProperty;
  flexWrap?: FlexWrapProperty;
  float?: FloatProperty;
  font?: FontProperty;
  fontFamily?: FontFamilyProperty;
  fontFeatureSettings?: FontFeatureSettingsProperty;
  fontKerning?: FontKerningProperty;
  fontLanguageOverride?: FontLanguageOverrideProperty;
  fontVariationSettings?: FontVariationSettingsProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontSynthesis?: FontSynthesisProperty;
  fontVariant?: FontVariantProperty;
  fontVariantAlternates?: FontVariantAlternatesProperty;
  fontVariantCaps?: FontVariantCapsProperty;
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  fontVariantLigatures?: FontVariantLigaturesProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  fontVariantPosition?: FontVariantPositionProperty;
  fontWeight?: FontWeightProperty;
  grid?: GridProperty;
  gridArea?: GridAreaProperty;
  gridAutoColumns?: GridAutoColumnsProperty;
  gridAutoFlow?: GridAutoFlowProperty;
  gridAutoRows?: GridAutoRowsProperty;
  gridColumn?: GridColumnProperty;
  gridColumnEnd?: GridColumnEndProperty;
  gridColumnGap?: GridColumnGapProperty<TLength>;
  gridColumnStart?: GridColumnStartProperty;
  gridGap?: GridGapProperty;
  gridRow?: GridRowProperty;
  gridRowEnd?: GridRowEndProperty;
  gridRowGap?: GridRowGapProperty<TLength>;
  gridRowStart?: GridRowStartProperty;
  gridTemplate?: GridTemplateProperty;
  gridTemplateAreas?: GridTemplateAreasProperty;
  gridTemplateColumns?: GridTemplateColumnsProperty;
  gridTemplateRows?: GridTemplateRowsProperty;
  hangingPunctuation?: HangingPunctuationProperty;
  height?: HeightProperty;
  hyphens?: HyphensProperty;
  imageOrientation?: ImageOrientationProperty;
  imageRendering?: ImageRenderingProperty;
  imageResolution?: ImageResolutionProperty;
  imeMode?: ImeModeProperty;
  initialLetter?: InitialLetterProperty;
  initialLetterAlign?: InitialLetterAlignProperty;
  inlineSize?: InlineSizeProperty;
  isolation?: IsolationProperty;
  justifyContent?: JustifyContentProperty;
  left?: LeftProperty<TLength>;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lineBreak?: LineBreakProperty;
  lineHeight?: LineHeightProperty<TLength>;
  lineHeightStep?: LineHeightStepProperty<TLength>;
  listStyle?: ListStyleProperty;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  margin?: MarginProperty<TLength>;
  marginBlockEnd?: MarginBlockEndProperty;
  marginBlockStart?: MarginBlockStartProperty;
  marginBottom?: MarginBottomProperty<TLength>;
  marginInlineEnd?: MarginInlineEndProperty;
  marginInlineStart?: MarginInlineStartProperty;
  marginLeft?: MarginLeftProperty<TLength>;
  marginRight?: MarginRightProperty<TLength>;
  marginTop?: MarginTopProperty<TLength>;
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  maskBorderMode?: MaskBorderModeProperty;
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  maskBorderRepeat?: MaskBorderRepeatProperty;
  maskBorderSlice?: MaskBorderSliceProperty;
  maskBorderSource?: MaskBorderSourceProperty;
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  maskClip?: MaskClipProperty;
  maskComposite?: MaskCompositeProperty;
  maskImage?: MaskImageProperty;
  maskMode?: MaskModeProperty;
  maskOrigin?: MaskOriginProperty;
  maskPosition?: MaskPositionProperty;
  maskRepeat?: MaskRepeatProperty;
  maskSize?: MaskSizeProperty<TLength>;
  maskType?: MaskTypeProperty;
  maxBlockSize?: MaxBlockSizeProperty;
  maxHeight?: MaxHeightProperty<TLength>;
  maxInlineSize?: MaxInlineSizeProperty;
  maxWidth?: MaxWidthProperty<TLength>;
  minBlockSize?: MinBlockSizeProperty;
  minHeight?: MinHeightProperty<TLength>;
  minInlineSize?: MinInlineSizeProperty;
  minWidth?: MinWidthProperty<TLength>;
  mixBlendMode?: MixBlendModeProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty;
  offset?: OffsetProperty;
  offsetAnchor?: OffsetAnchorProperty;
  offsetBlockEnd?: OffsetBlockEndProperty;
  offsetBlockStart?: OffsetBlockStartProperty;
  offsetInlineEnd?: OffsetInlineEndProperty;
  offsetInlineStart?: OffsetInlineStartProperty;
  offsetDistance?: OffsetDistanceProperty<TLength>;
  offsetPath?: OffsetPathProperty;
  offsetPosition?: OffsetPositionProperty;
  offsetRotate?: OffsetRotateProperty;
  opacity?: OpacityProperty;
  order?: OrderProperty;
  orphans?: OrphansProperty;
  outline?: OutlineProperty;
  outlineColor?: OutlineColorProperty;
  outlineOffset?: OutlineOffsetProperty<TLength>;
  outlineStyle?: OutlineStyleProperty;
  outlineWidth?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowWrap?: OverflowWrapProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  padding?: PaddingProperty<TLength>;
  paddingBlockEnd?: PaddingBlockEndProperty;
  paddingBlockStart?: PaddingBlockStartProperty;
  paddingBottom?: PaddingBottomProperty<TLength>;
  paddingInlineEnd?: PaddingInlineEndProperty;
  paddingInlineStart?: PaddingInlineStartProperty;
  paddingLeft?: PaddingLeftProperty<TLength>;
  paddingRight?: PaddingRightProperty<TLength>;
  paddingTop?: PaddingTopProperty<TLength>;
  pageBreakAfter?: PageBreakAfterProperty;
  pageBreakBefore?: PageBreakBeforeProperty;
  pageBreakInside?: PageBreakInsideProperty;
  perspective?: PerspectiveProperty<TLength>;
  perspectiveOrigin?: PerspectiveOriginProperty;
  pointerEvents?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rubyAlign?: RubyAlignProperty;
  rubyMerge?: RubyMergeProperty;
  rubyPosition?: RubyPositionProperty;
  scrollBehavior?: ScrollBehaviorProperty;
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty;
  scrollSnapDestination?: ScrollSnapDestinationProperty;
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  scrollSnapType?: ScrollSnapTypeProperty;
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  shapeImageThreshold?: ShapeImageThresholdProperty;
  shapeMargin?: ShapeMarginProperty<TLength>;
  shapeOutside?: ShapeOutsideProperty;
  tabSize?: TabSizeProperty<TLength>;
  tableLayout?: TableLayoutProperty;
  textAlign?: TextAlignProperty;
  textAlignLast?: TextAlignLastProperty;
  textCombineUpright?: TextCombineUprightProperty;
  textDecoration?: TextDecorationProperty;
  textDecorationColor?: TextDecorationColorProperty;
  textDecorationLine?: TextDecorationLineProperty;
  textDecorationSkip?: TextDecorationSkipProperty;
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  textDecorationStyle?: TextDecorationStyleProperty;
  textEmphasis?: TextEmphasisProperty;
  textEmphasisColor?: TextEmphasisColorProperty;
  textEmphasisPosition?: TextEmphasisPositionProperty;
  textEmphasisStyle?: TextEmphasisStyleProperty;
  textIndent?: TextIndentProperty;
  textJustify?: TextJustifyProperty;
  textOrientation?: TextOrientationProperty;
  textOverflow?: TextOverflowProperty;
  textRendering?: TextRenderingProperty;
  textShadow?: TextShadowProperty;
  textSizeAdjust?: TextSizeAdjustProperty;
  textTransform?: TextTransformProperty;
  textUnderlinePosition?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  touchAction?: TouchActionProperty;
  transform?: TransformProperty;
  transformBox?: TransformBoxProperty;
  transformOrigin?: TransformOriginProperty;
  transformStyle?: TransformStyleProperty;
  transition?: TransitionProperty;
  transitionDelay?: TransitionDelayProperty;
  transitionDuration?: TransitionDurationProperty;
  transitionProperty?: TransitionPropertyProperty;
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  unicodeBidi?: UnicodeBidiProperty;
  userSelect?: UserSelectProperty;
  verticalAlign?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  widows?: WidowsProperty;
  width?: WidthProperty;
  willChange?: WillChangeProperty;
  wordBreak?: WordBreakProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  wordWrap?: WordWrapProperty;
  writingMode?: WritingModeProperty;
  zIndex?: ZIndexProperty;
}

export interface StandardPropertiesFallback<TLength = string> {
  alignContent?: AlignContentProperty | AlignContentProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  animation?: AnimationProperty | AnimationProperty[];
  animationDelay?: AnimationDelayProperty | AnimationDelayProperty[];
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  animationDuration?: AnimationDurationProperty | AnimationDurationProperty[];
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  azimuth?: AzimuthProperty | AzimuthProperty[];
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  background?: BackgroundProperty | BackgroundProperty[];
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  backgroundPosition?: BackgroundPositionProperty | BackgroundPositionProperty[];
  backgroundPositionX?: BackgroundPositionXProperty | BackgroundPositionXProperty[];
  backgroundPositionY?: BackgroundPositionYProperty | BackgroundPositionYProperty[];
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  blockSize?: BlockSizeProperty | BlockSizeProperty[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  borderBlockEnd?: BorderBlockEndProperty | BorderBlockEndProperty[];
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  borderBlockEndWidth?: BorderBlockEndWidthProperty | BorderBlockEndWidthProperty[];
  borderBlockStart?: BorderBlockStartProperty | BorderBlockStartProperty[];
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  borderBlockStartWidth?: BorderBlockStartWidthProperty | BorderBlockStartWidthProperty[];
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  borderColor?: BorderColorProperty | BorderColorProperty[];
  borderImage?: BorderImageProperty | BorderImageProperty[];
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  borderInlineEnd?: BorderInlineEndProperty | BorderInlineEndProperty[];
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  borderInlineEndWidth?: BorderInlineEndWidthProperty | BorderInlineEndWidthProperty[];
  borderInlineStart?: BorderInlineStartProperty | BorderInlineStartProperty[];
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  borderInlineStartWidth?: BorderInlineStartWidthProperty | BorderInlineStartWidthProperty[];
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  borderSpacing?: BorderSpacingProperty | BorderSpacingProperty[];
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  boxFlex?: BoxFlexProperty | BoxFlexProperty[];
  boxFlexGroup?: BoxFlexGroupProperty | BoxFlexGroupProperty[];
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  boxOrdinalGroup?: BoxOrdinalGroupProperty | BoxOrdinalGroupProperty[];
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  boxPack?: BoxPackProperty | BoxPackProperty[];
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  caretColor?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  columnRule?: ColumnRuleProperty | ColumnRuleProperty[];
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  columnRuleWidth?: ColumnRuleWidthProperty | ColumnRuleWidthProperty[];
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  columns?: ColumnsProperty | ColumnsProperty[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  counterReset?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  displayInside?: DisplayInsideProperty | DisplayInsideProperty[];
  displayList?: DisplayListProperty | DisplayListProperty[];
  displayOutside?: DisplayOutsideProperty | DisplayOutsideProperty[];
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flex?: FlexProperty | FlexProperty[];
  flexBasis?: FlexBasisProperty | FlexBasisProperty[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  flexGrow?: FlexGrowProperty | FlexGrowProperty[];
  flexShrink?: FlexShrinkProperty | FlexShrinkProperty[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  font?: FontProperty | FontProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  grid?: GridProperty | GridProperty[];
  gridArea?: GridAreaProperty | GridAreaProperty[];
  gridAutoColumns?: GridAutoColumnsProperty | GridAutoColumnsProperty[];
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  gridAutoRows?: GridAutoRowsProperty | GridAutoRowsProperty[];
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  gridGap?: GridGapProperty | GridGapProperty[];
  gridRow?: GridRowProperty | GridRowProperty[];
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  gridTemplateColumns?: GridTemplateColumnsProperty | GridTemplateColumnsProperty[];
  gridTemplateRows?: GridTemplateRowsProperty | GridTemplateRowsProperty[];
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: HeightProperty | HeightProperty[];
  hyphens?: HyphensProperty | HyphensProperty[];
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  imeMode?: ImeModeProperty | ImeModeProperty[];
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  inlineSize?: InlineSizeProperty | InlineSizeProperty[];
  isolation?: IsolationProperty | IsolationProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  listStyle?: ListStyleProperty | ListStyleProperty[];
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  marginBlockEnd?: MarginBlockEndProperty | MarginBlockEndProperty[];
  marginBlockStart?: MarginBlockStartProperty | MarginBlockStartProperty[];
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  marginInlineEnd?: MarginInlineEndProperty | MarginInlineEndProperty[];
  marginInlineStart?: MarginInlineStartProperty | MarginInlineStartProperty[];
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  maskClip?: MaskClipProperty | MaskClipProperty[];
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  maskImage?: MaskImageProperty | MaskImageProperty[];
  maskMode?: MaskModeProperty | MaskModeProperty[];
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  maskPosition?: MaskPositionProperty | MaskPositionProperty[];
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?: MaxBlockSizeProperty | MaxBlockSizeProperty[];
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  maxInlineSize?: MaxInlineSizeProperty | MaxInlineSizeProperty[];
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  minBlockSize?: MinBlockSizeProperty | MinBlockSizeProperty[];
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  minInlineSize?: MinInlineSizeProperty | MinInlineSizeProperty[];
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  objectPosition?: ObjectPositionProperty | ObjectPositionProperty[];
  offset?: OffsetProperty | OffsetProperty[];
  offsetAnchor?: OffsetAnchorProperty | OffsetAnchorProperty[];
  offsetBlockEnd?: OffsetBlockEndProperty | OffsetBlockEndProperty[];
  offsetBlockStart?: OffsetBlockStartProperty | OffsetBlockStartProperty[];
  offsetInlineEnd?: OffsetInlineEndProperty | OffsetInlineEndProperty[];
  offsetInlineStart?: OffsetInlineStartProperty | OffsetInlineStartProperty[];
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  offsetPosition?: OffsetPositionProperty | OffsetPositionProperty[];
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: OpacityProperty | OpacityProperty[];
  order?: OrderProperty | OrderProperty[];
  orphans?: OrphansProperty | OrphansProperty[];
  outline?: OutlineProperty | OutlineProperty[];
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  overflowX?: OverflowXProperty | OverflowXProperty[];
  overflowY?: OverflowYProperty | OverflowYProperty[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  paddingBlockEnd?: PaddingBlockEndProperty | PaddingBlockEndProperty[];
  paddingBlockStart?: PaddingBlockStartProperty | PaddingBlockStartProperty[];
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  paddingInlineEnd?: PaddingInlineEndProperty | PaddingInlineEndProperty[];
  paddingInlineStart?: PaddingInlineStartProperty | PaddingInlineStartProperty[];
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  perspectiveOrigin?: PerspectiveOriginProperty | PerspectiveOriginProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty | ScrollSnapCoordinateProperty[];
  scrollSnapDestination?: ScrollSnapDestinationProperty | ScrollSnapDestinationProperty[];
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  shapeImageThreshold?: ShapeImageThresholdProperty | ShapeImageThresholdProperty[];
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  textEmphasisPosition?: TextEmphasisPositionProperty | TextEmphasisPositionProperty[];
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  textIndent?: TextIndentProperty | TextIndentProperty[];
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  textShadow?: TextShadowProperty | TextShadowProperty[];
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  touchAction?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  transformOrigin?: TransformOriginProperty | TransformOriginProperty[];
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  transition?: TransitionProperty | TransitionProperty[];
  transitionDelay?: TransitionDelayProperty | TransitionDelayProperty[];
  transitionDuration?: TransitionDurationProperty | TransitionDurationProperty[];
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  userSelect?: UserSelectProperty | UserSelectProperty[];
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: WidowsProperty | WidowsProperty[];
  width?: WidthProperty | WidthProperty[];
  willChange?: WillChangeProperty | WillChangeProperty[];
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
  zIndex?: ZIndexProperty | ZIndexProperty[];
}

export interface VendorProperties<TLength = string> {
  msOverflowStyle?: MsOverflowStyleProperty;
  mozAppearance?: MozAppearanceProperty;
  mozBinding?: MozBindingProperty;
  mozBorderBottomColors?: MozBorderBottomColorsProperty;
  mozBorderLeftColors?: MozBorderLeftColorsProperty;
  mozBorderRightColors?: MozBorderRightColorsProperty;
  mozBorderTopColors?: MozBorderTopColorsProperty;
  mozContextProperties?: MozContextPropertiesProperty;
  mozFloatEdge?: MozFloatEdgeProperty;
  mozForceBrokenImageIcon?: MozForceBrokenImageIconProperty;
  mozImageRegion?: MozImageRegionProperty;
  mozOrient?: MozOrientProperty;
  mozOutlineRadius?: MozOutlineRadiusProperty;
  mozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty;
  mozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty;
  mozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty;
  mozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty;
  mozStackSizing?: MozStackSizingProperty;
  mozTextBlink?: MozTextBlinkProperty;
  mozUserFocus?: MozUserFocusProperty;
  mozUserInput?: MozUserInputProperty;
  mozUserModify?: MozUserModifyProperty;
  mozWindowDragging?: MozWindowDraggingProperty;
  mozWindowShadow?: MozWindowShadowProperty;
  webkitBorderBefore?: WebkitBorderBeforeProperty;
  webkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  webkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  webkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty;
  webkitBoxReflect?: WebkitBoxReflectProperty;
  webkitMask?: WebkitMaskProperty;
  webkitMaskAttachment?: WebkitMaskAttachmentProperty;
  webkitMaskClip?: WebkitMaskClipProperty;
  webkitMaskComposite?: WebkitMaskCompositeProperty;
  webkitMaskImage?: WebkitMaskImageProperty;
  webkitMaskOrigin?: WebkitMaskOriginProperty;
  webkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  webkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  webkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  webkitMaskRepeat?: WebkitMaskRepeatProperty;
  webkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  webkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  webkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  webkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  webkitTextFillColor?: WebkitTextFillColorProperty;
  webkitTextStroke?: WebkitTextStrokeProperty<TLength>;
  webkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  webkitTouchCallout?: WebkitTouchCalloutProperty;
}

export interface VendorPropertiesFallback<TLength = string> {
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  mozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  mozBinding?: MozBindingProperty | MozBindingProperty[];
  mozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  mozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  mozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  mozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  mozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  mozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  mozForceBrokenImageIcon?: MozForceBrokenImageIconProperty | MozForceBrokenImageIconProperty[];
  mozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  mozOrient?: MozOrientProperty | MozOrientProperty[];
  mozOutlineRadius?: MozOutlineRadiusProperty | MozOutlineRadiusProperty[];
  mozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty | MozOutlineRadiusBottomleftProperty[];
  mozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty | MozOutlineRadiusBottomrightProperty[];
  mozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty | MozOutlineRadiusTopleftProperty[];
  mozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty | MozOutlineRadiusToprightProperty[];
  mozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  mozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  mozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  mozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  mozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  mozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  mozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  webkitBorderBefore?: WebkitBorderBeforeProperty | WebkitBorderBeforeProperty[];
  webkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  webkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  webkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty | WebkitBorderBeforeWidthProperty[];
  webkitBoxReflect?: WebkitBoxReflectProperty | WebkitBoxReflectProperty[];
  webkitMask?: WebkitMaskProperty | WebkitMaskProperty[];
  webkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  webkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  webkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  webkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  webkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  webkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  webkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  webkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  webkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  webkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  webkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  webkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  webkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  webkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  webkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  webkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  webkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
}

export interface Properties<TLength = string> extends StandardProperties<TLength>, VendorProperties<TLength> {}

export interface PropertiesFallback<TLength = string> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

export type Pseudos =
  | ":placeholder-shown"
  | ":active"
  | ":any-link"
  | ":checked"
  | ":default"
  | ":defined"
  | ":dir"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-of-type"
  | ":fullscreen"
  | ":focus"
  | ":focus-within"
  | ":hover"
  | ":indeterminate"
  | ":in-range"
  | ":invalid"
  | ":lang"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":out-of-range"
  | ":any"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":valid"
  | ":visited"
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-thumb"
  | "::-ms-track"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::cue"
  | "::first-letter"
  | "::first-line"
  | "::grammar-error"
  | "::placeholder"
  | "::selection"
  | "::spelling-error";
type AlignContentProperty = All | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";

type AlignItemsProperty = All | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

type AlignSelfProperty = All | "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

type AnimationProperty = All | SingleAnimation;

type AnimationDelayProperty = All | string;

type AnimationDirectionProperty = All | SingleAnimationDirection;

type AnimationDurationProperty = All | string;

type AnimationFillModeProperty = All | SingleAnimationFillMode;

type AnimationIterationCountProperty = All | SingleAnimationIterationCount;

type AnimationNameProperty = All | "none" | string;

type AnimationPlayStateProperty = All | SingleAnimationPlayState;

type AnimationTimingFunctionProperty = All | SingleTimingFunction;

type AppearanceProperty = All | "auto" | "none";

type AzimuthProperty =
  | All
  | "rightwards"
  | "left-side"
  | "far-left"
  | "left"
  | "center-left"
  | "center"
  | "leftwards"
  | "right"
  | "far-right"
  | "right-side"
  | "behind"
  | "center-right"
  | string;

type BackdropFilterProperty = All | "none" | string;

type BackfaceVisibilityProperty = All | "visible" | "hidden";

type BackgroundProperty = All | string;

type BackgroundAttachmentProperty = All | Attachment;

type BackgroundBlendModeProperty = All | BlendMode;

type BackgroundClipProperty = All | Box;

type BackgroundColorProperty = All | Color;

type BackgroundImageProperty = All | BgImage;

type BackgroundOriginProperty = All | Box;

type BackgroundPositionProperty = All | string;

type BackgroundPositionXProperty = All | string;

type BackgroundPositionYProperty = All | string;

type BackgroundRepeatProperty = All | RepeatStyle;

type BackgroundSizeProperty<TLength> = All | BgSize<TLength>;

type BlockSizeProperty = All | string;

type BorderProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockEndProperty = All | string;

type BorderBlockEndColorProperty = All | string;

type BorderBlockEndStyleProperty = All | string;

type BorderBlockEndWidthProperty = All | string;

type BorderBlockStartProperty = All | string;

type BorderBlockStartColorProperty = All | string;

type BorderBlockStartStyleProperty = All | string;

type BorderBlockStartWidthProperty = All | string;

type BorderBottomProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderBottomColorProperty = All | Color;

type BorderBottomLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderBottomRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderBottomStyleProperty = All | BrStyle;

type BorderBottomWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderCollapseProperty = All | "collapse" | "separate";

type BorderColorProperty = All | Color;

type BorderImageProperty = All | string;

type BorderImageOutsetProperty<TLength> = All | TLength | number;

type BorderImageRepeatProperty = All | "stretch" | "repeat" | "round" | "space";

type BorderImageSliceProperty = All | string;

type BorderImageSourceProperty = All | "none" | string;

type BorderImageWidthProperty<TLength> = All | LengthPercentage<TLength> | "auto" | number;

type BorderInlineEndProperty = All | string;

type BorderInlineEndColorProperty = All | string;

type BorderInlineEndStyleProperty = All | string;

type BorderInlineEndWidthProperty = All | string;

type BorderInlineStartProperty = All | string;

type BorderInlineStartColorProperty = All | string;

type BorderInlineStartStyleProperty = All | string;

type BorderInlineStartWidthProperty = All | string;

type BorderLeftProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderLeftColorProperty = All | Color;

type BorderLeftStyleProperty = All | BrStyle;

type BorderLeftWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderRightProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderRightColorProperty = All | Color;

type BorderRightStyleProperty = All | BrStyle;

type BorderRightWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderSpacingProperty = All | string;

type BorderStyleProperty = All | BrStyle;

type BorderTopProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderTopColorProperty = All | Color;

type BorderTopLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderTopRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderTopStyleProperty = All | BrStyle;

type BorderTopWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderWidthProperty<TLength> = All | BrWidth<TLength>;

type BottomProperty<TLength> = All | TLength | "auto" | string;

type BoxAlignProperty = All | "start" | "center" | "end" | "baseline" | "stretch";

type BoxDecorationBreakProperty = All | "slice" | "clone";

type BoxDirectionProperty = All | "normal" | "reverse" | "inherit";

type BoxFlexProperty = All | number;

type BoxFlexGroupProperty = All | number;

type BoxLinesProperty = All | "single" | "multiple";

type BoxOrdinalGroupProperty = All | number;

type BoxOrientProperty = All | "horizontal" | "vertical" | "inline-axis" | "block-axis" | "inherit";

type BoxPackProperty = All | "start" | "center" | "end" | "justify";

type BoxShadowProperty = All | "none" | string;

type BoxSizingProperty = All | "content-box" | "border-box";

type BreakAfterProperty = All | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";

type BreakBeforeProperty = All | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";

type BreakInsideProperty = All | "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";

type CaptionSideProperty = All | "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";

type CaretColorProperty = All | Color | "auto";

type ClearProperty = All | "none" | "left" | "right" | "both" | "inline-start" | "inline-end";

type ClipProperty = All | "auto" | string;

type ClipPathProperty = All | GeometryBox | "none" | string;

type ColorProperty = All | Color;

type ColumnCountProperty = All | "auto" | number;

type ColumnFillProperty = All | "auto" | "balance" | "balance-all";

type ColumnGapProperty<TLength> = All | LengthPercentage<TLength> | "normal";

type ColumnRuleProperty = All | string;

type ColumnRuleColorProperty = All | Color;

type ColumnRuleStyleProperty = All | string;

type ColumnRuleWidthProperty = All | string;

type ColumnSpanProperty = All | "none" | "all";

type ColumnWidthProperty<TLength> = All | TLength | "auto";

type ColumnsProperty = All | string;

type ContainProperty = All | "none" | "strict" | "content" | "size" | "layout" | "style" | "paint" | string;

type ContentProperty = All | ContentList | "normal" | "none" | string;

type CounterIncrementProperty = All | "none" | string;

type CounterResetProperty = All | "none" | string;

type CursorProperty =
  | All
  | "grabbing"
  | "auto"
  | "default"
  | "none"
  | "context-menu"
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text"
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "grab"
  | "n-resize"
  | "ne-resize"
  | "nw-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "w-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "col-resize"
  | "row-resize"
  | "all-scroll"
  | "zoom-in"
  | "zoom-out"
  | "e-resize"
  | string;

type DirectionProperty = All | "ltr" | "rtl";

type DisplayProperty = All | DisplayOutside | DisplayInside | DisplayInternal | DisplayBox | DisplayLegacy | string;

type DisplayInsideProperty = All | "auto" | "block" | "table" | "flex" | "grid" | "ruby";

type DisplayListProperty = All | "none" | "list-item";

type DisplayOutsideProperty =
  | All
  | "ruby-text-container"
  | "inline-level"
  | "run-in"
  | "contents"
  | "none"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "block-level"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "table-row";

type EmptyCellsProperty = All | "show" | "hide";

type FilterProperty = All | "none" | string;

type FlexProperty = All | "none" | string;

type FlexBasisProperty = All | "content" | string;

type FlexDirectionProperty = All | "row" | "row-reverse" | "column" | "column-reverse";

type FlexFlowProperty = All | string;

type FlexGrowProperty = All | number;

type FlexShrinkProperty = All | number;

type FlexWrapProperty = All | "nowrap" | "wrap" | "wrap-reverse";

type FloatProperty = All | "left" | "right" | "none" | "inline-start" | "inline-end";

type FontProperty = All | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

type FontFamilyProperty = All | GenericFamily | string;

type FontFeatureSettingsProperty = All | FeatureTagValue | "normal";

type FontKerningProperty = All | "auto" | "normal" | "none";

type FontLanguageOverrideProperty = All | "normal" | string;

type FontVariationSettingsProperty = All | "normal" | string;

type FontSizeProperty<TLength> = All | AbsoluteSize | RelativeSize | LengthPercentage<TLength>;

type FontSizeAdjustProperty = All | "none" | number;

type FontStretchProperty =
  | All
  | "normal"
  | "ultra-condensed"
  | "extra-condensed"
  | "condensed"
  | "semi-condensed"
  | "semi-expanded"
  | "expanded"
  | "extra-expanded"
  | "ultra-expanded";

type FontStyleProperty = All | "normal" | "italic" | "oblique";

type FontSynthesisProperty = All | "none" | "weight" | "style" | string;

type FontVariantProperty = All | "normal" | "none" | string;

type FontVariantAlternatesProperty = All | "normal" | string;

type FontVariantCapsProperty = All | "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";

type FontVariantEastAsianProperty = All | EastAsianVariantValues | EastAsianWidthValues | "normal" | "ruby" | string;

type FontVariantLigaturesProperty = All | CommonLigValues | DiscretionaryLigValues | HistoricalLigValues | ContextualAltValues | "normal" | "none" | string;

type FontVariantNumericProperty = All | NumericFigureValues | NumericSpacingValues | NumericFractionValues | "normal" | "ordinal" | "slashed-zero" | string;

type FontVariantPositionProperty = All | "normal" | "sub" | "super";

type FontWeightProperty = All | "900" | "bold" | "bolder" | "lighter" | "100" | "200" | "normal" | "400" | "500" | "600" | "700" | "800" | "300";

type GridProperty = All | string;

type GridAreaProperty = All | GridLine;

type GridAutoColumnsProperty = All | string;

type GridAutoFlowProperty = All | "row" | "column" | "dense" | string;

type GridAutoRowsProperty = All | string;

type GridColumnProperty = All | GridLine;

type GridColumnEndProperty = All | GridLine;

type GridColumnGapProperty<TLength> = All | LengthPercentage<TLength>;

type GridColumnStartProperty = All | GridLine;

type GridGapProperty = All | string;

type GridRowProperty = All | GridLine;

type GridRowEndProperty = All | GridLine;

type GridRowGapProperty<TLength> = All | LengthPercentage<TLength>;

type GridRowStartProperty = All | GridLine;

type GridTemplateProperty = All | "none" | string;

type GridTemplateAreasProperty = All | "none" | string;

type GridTemplateColumnsProperty = All | "none" | string;

type GridTemplateRowsProperty = All | "none" | string;

type HangingPunctuationProperty = All | "none" | "first" | "force-end" | "allow-end" | "last" | string;

type HeightProperty = All | string;

type HyphensProperty = All | "none" | "manual" | "auto";

type ImageOrientationProperty = All | "from-image" | string;

type ImageRenderingProperty = All | "auto" | "crisp-edges" | "pixelated";

type ImageResolutionProperty = All | string;

type ImeModeProperty = All | "auto" | "normal" | "active" | "inactive" | "disabled";

type InitialLetterProperty = All | "normal" | string;

type InitialLetterAlignProperty = All | "auto" | "alphabetic" | "hanging" | "ideographic";

type InlineSizeProperty = All | string;

type IsolationProperty = All | "auto" | "isolate";

type JustifyContentProperty = All | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

type LeftProperty<TLength> = All | TLength | "auto" | string;

type LetterSpacingProperty<TLength> = All | TLength | "normal";

type LineBreakProperty = All | "auto" | "loose" | "normal" | "strict";

type LineHeightProperty<TLength> = All | TLength | "normal" | string | number;

type LineHeightStepProperty<TLength> = All | TLength | "none";

type ListStyleProperty = All | string;

type ListStyleImageProperty = All | "none" | string;

type ListStylePositionProperty = All | "inside" | "outside";

type ListStyleTypeProperty = All | "none" | string;

type MarginProperty<TLength> = All | TLength | "auto" | string;

type MarginBlockEndProperty = All | string;

type MarginBlockStartProperty = All | string;

type MarginBottomProperty<TLength> = All | TLength | "auto" | string;

type MarginInlineEndProperty = All | string;

type MarginInlineStartProperty = All | string;

type MarginLeftProperty<TLength> = All | TLength | "auto" | string;

type MarginRightProperty<TLength> = All | TLength | "auto" | string;

type MarginTopProperty<TLength> = All | TLength | "auto" | string;

type MaskProperty<TLength> = All | MaskLayer<TLength>;

type MaskBorderProperty = All | string;

type MaskBorderModeProperty = All | "luminance" | "alpha";

type MaskBorderOutsetProperty<TLength> = All | TLength | number;

type MaskBorderRepeatProperty = All | "stretch" | "repeat" | "round" | "space";

type MaskBorderSliceProperty = All | string;

type MaskBorderSourceProperty = All | "none" | string;

type MaskBorderWidthProperty<TLength> = All | LengthPercentage<TLength> | "auto" | number;

type MaskClipProperty = All | GeometryBox | "no-clip" | string;

type MaskCompositeProperty = All | CompositingOperator;

type MaskImageProperty = All | MaskReference;

type MaskModeProperty = All | MaskingMode;

type MaskOriginProperty = All | GeometryBox;

type MaskPositionProperty = All | string;

type MaskRepeatProperty = All | RepeatStyle;

type MaskSizeProperty<TLength> = All | BgSize<TLength>;

type MaskTypeProperty = All | "luminance" | "alpha";

type MaxBlockSizeProperty = All | string;

type MaxHeightProperty<TLength> = All | TLength | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;

type MaxInlineSizeProperty = All | string;

type MaxWidthProperty<TLength> = All | TLength | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;

type MinBlockSizeProperty = All | string;

type MinHeightProperty<TLength> = All | TLength | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;

type MinInlineSizeProperty = All | string;

type MinWidthProperty<TLength> = All | TLength | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;

type MixBlendModeProperty = All | BlendMode;

type ObjectFitProperty = All | "fill" | "contain" | "cover" | "none" | "scale-down";

type ObjectPositionProperty = All | string;

type OffsetProperty = All | string;

type OffsetAnchorProperty = All | "auto" | string;

type OffsetBlockEndProperty = All | string;

type OffsetBlockStartProperty = All | string;

type OffsetInlineEndProperty = All | string;

type OffsetInlineStartProperty = All | string;

type OffsetDistanceProperty<TLength> = All | LengthPercentage<TLength>;

type OffsetPathProperty = All | GeometryBox | "none" | string;

type OffsetPositionProperty = All | "auto" | string;

type OffsetRotateProperty = All | "auto" | "reverse" | string;

type OpacityProperty = All | number;

type OrderProperty = All | number;

type OrphansProperty = All | number;

type OutlineProperty = All | string;

type OutlineColorProperty = All | Color | "invert";

type OutlineOffsetProperty<TLength> = All | TLength;

type OutlineStyleProperty = All | BrStyle | "auto";

type OutlineWidthProperty<TLength> = All | BrWidth<TLength>;

type OverflowProperty = All | "visible" | "hidden" | "scroll" | "auto";

type OverflowClipBoxProperty = All | "padding-box" | "content-box";

type OverflowWrapProperty = All | "normal" | "break-word";

type OverflowXProperty = All | "visible" | "hidden" | "scroll" | "auto";

type OverflowYProperty = All | "visible" | "hidden" | "scroll" | "auto";

type PaddingProperty<TLength> = All | TLength | string;

type PaddingBlockEndProperty = All | string;

type PaddingBlockStartProperty = All | string;

type PaddingBottomProperty<TLength> = All | TLength | string;

type PaddingInlineEndProperty = All | string;

type PaddingInlineStartProperty = All | string;

type PaddingLeftProperty<TLength> = All | TLength | string;

type PaddingRightProperty<TLength> = All | TLength | string;

type PaddingTopProperty<TLength> = All | TLength | string;

type PageBreakAfterProperty = All | "auto" | "always" | "avoid" | "left" | "right";

type PageBreakBeforeProperty = All | "auto" | "always" | "avoid" | "left" | "right";

type PageBreakInsideProperty = All | "auto" | "avoid";

type PerspectiveProperty<TLength> = All | TLength | "none";

type PerspectiveOriginProperty = All | string;

type PointerEventsProperty = All | "inherit" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "auto" | "painted" | "fill" | "stroke" | "all" | "visible";

type PositionProperty = All | "static" | "relative" | "absolute" | "sticky" | "fixed";

type QuotesProperty = All | "none" | string;

type ResizeProperty = All | "none" | "both" | "horizontal" | "vertical";

type RightProperty<TLength> = All | TLength | "auto" | string;

type RubyAlignProperty = All | "start" | "center" | "space-between" | "space-around";

type RubyMergeProperty = All | "separate" | "collapse" | "auto";

type RubyPositionProperty = All | "over" | "under" | "inter-character";

type ScrollBehaviorProperty = All | "auto" | "smooth";

type ScrollSnapCoordinateProperty = All | "none" | string;

type ScrollSnapDestinationProperty = All | string;

type ScrollSnapPointsXProperty = All | "none" | string;

type ScrollSnapPointsYProperty = All | "none" | string;

type ScrollSnapTypeProperty = All | "none" | "mandatory" | "proximity";

type ScrollSnapTypeXProperty = All | "none" | "mandatory" | "proximity";

type ScrollSnapTypeYProperty = All | "none" | "mandatory" | "proximity";

type ShapeImageThresholdProperty = All | number;

type ShapeMarginProperty<TLength> = All | LengthPercentage<TLength>;

type ShapeOutsideProperty = All | ShapeBox | "none" | string;

type TabSizeProperty<TLength> = All | TLength | number;

type TableLayoutProperty = All | "auto" | "fixed";

type TextAlignProperty = All | "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";

type TextAlignLastProperty = All | "auto" | "start" | "end" | "left" | "right" | "center" | "justify";

type TextCombineUprightProperty = All | "none" | "all" | string;

type TextDecorationProperty = All | string;

type TextDecorationColorProperty = All | Color;

type TextDecorationLineProperty = All | "none" | "underline" | "overline" | "line-through" | "blink" | string;

type TextDecorationSkipProperty = All | "none" | "objects" | "spaces" | "leading-spaces" | "trailing-spaces" | "edges" | "box-decoration" | string;

type TextDecorationSkipInkProperty = All | "auto" | "none";

type TextDecorationStyleProperty = All | "solid" | "double" | "dotted" | "dashed" | "wavy";

type TextEmphasisProperty = All | string;

type TextEmphasisColorProperty = All | Color;

type TextEmphasisPositionProperty = All | string;

type TextEmphasisStyleProperty = All | "none" | "filled" | "open" | "dot" | "circle" | "double-circle" | "triangle" | "sesame" | string;

type TextIndentProperty = All | string;

type TextJustifyProperty = All | "auto" | "inter-character" | "inter-word" | "none";

type TextOrientationProperty = All | "mixed" | "upright" | "sideways";

type TextOverflowProperty = All | "clip" | "ellipsis" | string;

type TextRenderingProperty = All | "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";

type TextShadowProperty = All | "none" | string;

type TextSizeAdjustProperty = All | "none" | "auto" | string;

type TextTransformProperty = All | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";

type TextUnderlinePositionProperty = All | "auto" | "under" | "left" | "right" | string;

type TopProperty<TLength> = All | TLength | "auto" | string;

type TouchActionProperty = All | "manipulation" | "none" | "pinch-zoom" | "pan-x" | "pan-left" | "auto" | "pan-y" | "pan-up" | "pan-down" | "pan-right" | string;

type TransformProperty = All | "none" | string;

type TransformBoxProperty = All | "border-box" | "fill-box" | "view-box";

type TransformOriginProperty = All | string;

type TransformStyleProperty = All | "flat" | "preserve-3d";

type TransitionProperty = All | SingleTransition;

type TransitionDelayProperty = All | string;

type TransitionDurationProperty = All | string;

type TransitionPropertyProperty = All | SingleTransitionProperty | "none";

type TransitionTimingFunctionProperty = All | SingleTransitionTimingFunction;

type UnicodeBidiProperty = All | "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";

type UserSelectProperty = All | "auto" | "text" | "none" | "contain" | "all";

type VerticalAlignProperty<TLength> = All | TLength | "sub" | "super" | "text-top" | "baseline" | "middle" | "top" | "bottom" | "text-bottom" | string;

type VisibilityProperty = All | "visible" | "hidden" | "collapse";

type WhiteSpaceProperty = All | "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";

type WidowsProperty = All | number;

type WidthProperty = All | string;

type WillChangeProperty = All | AnimateableFeature | "auto";

type WordBreakProperty = All | "normal" | "break-all" | "keep-all";

type WordSpacingProperty<TLength> = All | LengthPercentage<TLength> | "normal";

type WordWrapProperty = All | "normal" | "break-word";

type WritingModeProperty = All | "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";

type ZIndexProperty = All | "auto" | number;

type MsOverflowStyleProperty = All | "auto" | "none" | "scrollbar" | "-ms-autohiding-scrollbar";

type MozAppearanceProperty =
  | All
  | "-moz-window-titlebar-maximized"
  | "button"
  | "button-arrow-down"
  | "button-arrow-next"
  | "button-arrow-previous"
  | "button-arrow-up"
  | "button-bevel"
  | "button-focus"
  | "caret"
  | "checkbox"
  | "checkbox-container"
  | "checkbox-label"
  | "checkmenuitem"
  | "dualbutton"
  | "groupbox"
  | "listbox"
  | "listitem"
  | "menuarrow"
  | "menubar"
  | "menucheckbox"
  | "menuimage"
  | "menuitem"
  | "menuitemtext"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "menupopup"
  | "menuradio"
  | "menuseparator"
  | "meterbar"
  | "meterchunk"
  | "progressbar"
  | "progressbar-vertical"
  | "progresschunk"
  | "progresschunk-vertical"
  | "radio"
  | "radio-container"
  | "radio-label"
  | "radiomenuitem"
  | "range"
  | "range-thumb"
  | "resizer"
  | "resizerpanel"
  | "scale-horizontal"
  | "scalethumbend"
  | "scalethumb-horizontal"
  | "scalethumbstart"
  | "scalethumbtick"
  | "scalethumb-vertical"
  | "scale-vertical"
  | "scrollbarbutton-down"
  | "scrollbarbutton-left"
  | "scrollbarbutton-right"
  | "none"
  | "scrollbarthumb-horizontal"
  | "scrollbarthumb-vertical"
  | "scrollbartrack-horizontal"
  | "scrollbartrack-vertical"
  | "searchfield"
  | "separator"
  | "sheet"
  | "spinner"
  | "spinner-downbutton"
  | "spinner-textfield"
  | "spinner-upbutton"
  | "splitter"
  | "statusbar"
  | "statusbarpanel"
  | "tab"
  | "tabpanel"
  | "tabpanels"
  | "tab-scroll-arrow-back"
  | "tab-scroll-arrow-forward"
  | "textfield"
  | "textfield-multiline"
  | "toolbar"
  | "toolbarbutton"
  | "toolbarbutton-dropdown"
  | "toolbargripper"
  | "toolbox"
  | "tooltip"
  | "treeheader"
  | "treeheadercell"
  | "treeheadersortarrow"
  | "treeitem"
  | "treeline"
  | "treetwisty"
  | "treetwistyopen"
  | "treeview"
  | "-moz-mac-unified-toolbar"
  | "-moz-win-borderless-glass"
  | "-moz-win-browsertabbar-toolbox"
  | "-moz-win-communicationstext"
  | "-moz-win-communications-toolbox"
  | "-moz-win-exclude-glass"
  | "-moz-win-glass"
  | "-moz-win-mediatext"
  | "-moz-win-media-toolbox"
  | "-moz-window-button-box"
  | "-moz-window-button-box-maximized"
  | "-moz-window-button-close"
  | "-moz-window-button-maximize"
  | "-moz-window-button-minimize"
  | "-moz-window-button-restore"
  | "-moz-window-frame-bottom"
  | "-moz-window-frame-left"
  | "-moz-window-frame-right"
  | "-moz-window-titlebar"
  | "scrollbarbutton-up";

type MozBindingProperty = All | "none" | string;

type MozBorderBottomColorsProperty = All | string;

type MozBorderLeftColorsProperty = All | string;

type MozBorderRightColorsProperty = All | string;

type MozBorderTopColorsProperty = All | string;

type MozContextPropertiesProperty = All | "none" | "fill" | "fill-opacity" | "stroke" | "stroke-opacity" | string;

type MozFloatEdgeProperty = All | "border-box" | "content-box" | "margin-box" | "padding-box";

type MozForceBrokenImageIconProperty = All | number;

type MozImageRegionProperty = All | "auto" | string;

type MozOrientProperty = All | "inline" | "block" | "horizontal" | "vertical";

type MozOutlineRadiusProperty = All | string;

type MozOutlineRadiusBottomleftProperty = All | string;

type MozOutlineRadiusBottomrightProperty = All | string;

type MozOutlineRadiusTopleftProperty = All | string;

type MozOutlineRadiusToprightProperty = All | string;

type MozStackSizingProperty = All | "ignore" | "stretch-to-fit";

type MozTextBlinkProperty = All | "none" | "blink";

type MozUserFocusProperty = All | "ignore" | "normal" | "select-after" | "select-before" | "select-menu" | "select-same" | "select-all" | "none";

type MozUserInputProperty = All | "auto" | "none" | "enabled" | "disabled";

type MozUserModifyProperty = All | "read-only" | "read-write" | "write-only";

type MozWindowDraggingProperty = All | "drag" | "no-drag";

type MozWindowShadowProperty = All | "default" | "menu" | "tooltip" | "sheet" | "none";

type WebkitBorderBeforeProperty = All | string;

type WebkitBorderBeforeColorProperty = All | string;

type WebkitBorderBeforeStyleProperty = All | string;

type WebkitBorderBeforeWidthProperty = All | string;

type WebkitBoxReflectProperty = All | string;

type WebkitMaskProperty = All | string;

type WebkitMaskAttachmentProperty = All | Attachment | string;

type WebkitMaskClipProperty = All | "border" | "border-box" | "padding" | "padding-box" | "content" | "content-box" | "text" | string;

type WebkitMaskCompositeProperty = All | CompositeStyle | string;

type WebkitMaskImageProperty = All | string;

type WebkitMaskOriginProperty = All | "padding" | "border" | "content" | string;

type WebkitMaskPositionProperty<TLength> = All | MaskPosition<TLength>;

type WebkitMaskPositionXProperty<TLength> = All | LengthPercentage<TLength> | "left" | "center" | "right" | string;

type WebkitMaskPositionYProperty<TLength> = All | LengthPercentage<TLength> | "top" | "center" | "bottom" | string;

type WebkitMaskRepeatProperty = All | RepeatStyle | string;

type WebkitMaskRepeatXProperty = All | "repeat" | "no-repeat" | "space" | "round";

type WebkitMaskRepeatYProperty = All | "repeat" | "no-repeat" | "space" | "round";

type WebkitOverflowScrollingProperty = All | "auto" | "touch";

type WebkitTapHighlightColorProperty = All | Color;

type WebkitTextFillColorProperty = All | Color;

type WebkitTextStrokeProperty<TLength> = All | Color | TLength | string;

type WebkitTextStrokeColorProperty = All | Color;

type WebkitTextStrokeWidthProperty<TLength> = All | TLength;

type WebkitTouchCalloutProperty = All | "default" | "none";

type All = "initial" | "inherit" | "unset" | "revert";

type SingleAnimation = SingleTimingFunction | SingleAnimationIterationCount | SingleAnimationDirection | SingleAnimationFillMode | SingleAnimationPlayState | "none" | string;

type SingleTimingFunction = StepTimingFunction | "linear" | string;

type StepTimingFunction = "step-start" | "step-end" | string;

type SingleAnimationIterationCount = "infinite" | number;

type SingleAnimationDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";

type SingleAnimationFillMode = "none" | "forwards" | "backwards" | "both";

type SingleAnimationPlayState = "running" | "paused";

type Attachment = "scroll" | "fixed" | "local";

type BlendMode =
  | "hard-light"
  | "normal"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "multiply"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

type Box = "border-box" | "padding-box" | "content-box";

type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

type NamedColor =
  | "lightgrey"
  | "transparent"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "aliceblue"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

type DeprecatedSystemColor =
  | "InactiveCaptionText"
  | "ActiveBorder"
  | "AppWorkspace"
  | "Background"
  | "ButtonFace"
  | "ButtonHighlight"
  | "ButtonShadow"
  | "ButtonText"
  | "CaptionText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "InactiveBorder"
  | "InactiveCaption"
  | "ActiveCaption"
  | "InfoBackground"
  | "InfoText"
  | "Menu"
  | "MenuText"
  | "Scrollbar"
  | "ThreeDDarkShadow"
  | "ThreeDFace"
  | "ThreeDHighlight"
  | "ThreeDLightShadow"
  | "ThreeDShadow"
  | "Window"
  | "WindowFrame"
  | "WindowText";

type BgImage = "none" | string;

type RepeatStyle = "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat";

type BgSize<TLength> = LengthPercentage<TLength> | "auto" | "cover" | "contain";

type LengthPercentage<TLength> = TLength | string;

type BrWidth<TLength> = TLength | "thin" | "medium" | "thick";

type BrStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";

type GeometryBox = ShapeBox | "fill-box" | "stroke-box" | "view-box";

type ShapeBox = Box | "margin-box";

type ContentList = Quote | "contents" | string;

type Quote = "open-quote" | "close-quote" | "no-open-quote" | "no-close-quote";

type DisplayOutside = "block" | "inline" | "run-in";

type DisplayInside = "flow" | "flow-root" | "table" | "flex" | "grid" | "subgrid" | "ruby";

type DisplayInternal =
  | "table-column"
  | "table-row-group"
  | "table-footer-group"
  | "table-row"
  | "table-cell"
  | "table-column-group"
  | "table-header-group"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container";

type DisplayBox = "contents" | "none";

type DisplayLegacy = "inline-block" | "inline-list-item" | "inline-table" | "inline-flex" | "inline-grid";

type GenericFamily = "serif" | "sans-serif" | "cursive" | "fantasy" | "monospace";

type FeatureTagValue = "on" | "off" | string | number;

type AbsoluteSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";

type RelativeSize = "larger" | "smaller";

type EastAsianVariantValues = "jis78" | "jis83" | "jis90" | "jis04" | "simplified" | "traditional";

type EastAsianWidthValues = "full-width" | "proportional-width";

type CommonLigValues = "common-ligatures" | "no-common-ligatures";

type DiscretionaryLigValues = "discretionary-ligatures" | "no-discretionary-ligatures";

type HistoricalLigValues = "historical-ligatures" | "no-historical-ligatures";

type ContextualAltValues = "contextual" | "no-contextual";

type NumericFigureValues = "lining-nums" | "oldstyle-nums";

type NumericSpacingValues = "proportional-nums" | "tabular-nums";

type NumericFractionValues = "diagonal-fractions" | "stacked-fractions";

type GridLine = "auto" | string;

type MaskLayer<TLength> = MaskReference | BgSize<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | string;

type MaskReference = "none" | string;

type CompositingOperator = "add" | "subtract" | "intersect" | "exclude";

type MaskingMode = "alpha" | "luminance" | "match-source";

type SingleTransition = SingleTransitionProperty | SingleTransitionTimingFunction | "none" | string;

type SingleTransitionProperty = "all" | string;

type SingleTransitionTimingFunction = SingleTimingFunction;

type AnimateableFeature = "scroll-position" | "contents" | string;

type CompositeStyle =
  | "source-atop"
  | "clear"
  | "source-over"
  | "source-in"
  | "source-out"
  | "copy"
  | "destination-over"
  | "destination-in"
  | "destination-out"
  | "destination-atop"
  | "xor";

type MaskPosition<TLength> = LengthPercentage<TLength> | "left" | "center" | "right" | "top" | "bottom";

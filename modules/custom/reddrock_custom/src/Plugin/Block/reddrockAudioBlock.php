<?php

namespace Drupal\reddrock_custom\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a block with a simple text.
 *
 * @Block(
 *   id = "reddrock_custom_audio_switch",
 *   admin_label = @Translation("Reddrock Custom Audio Switch"),
 * )
 */
class reddrockAudioBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#markup' => '<div class="mytooltip"><span class="tooltiptext">Turn the switch on to experience the original sounds of ReddRock <br /> Hover your mouse or click to experience</span><span class="checkbox-label">SOUNDS:</span><label class="switch"><input id="audioswitch" type="checkbox"><span class="slider"></span></label></div>',
      '#allowed_tags' => ['div','input','span','label','br',],
    ];
  }

  /**
   * {@inheritdoc}
   */
  protected function blockAccess(AccountInterface $account) {
    return AccessResult::allowedIfHasPermission($account, 'access content');
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $config = $this->getConfiguration();

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['reddrockAudioBlock_settings'] = $form_state->getValue('reddrockAudioBlock_settings');
  }
}
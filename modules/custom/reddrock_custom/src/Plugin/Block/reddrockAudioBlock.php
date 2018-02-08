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
      '#markup' => '<span class="checkbox-label">SOUNDS:</div><label class="switch"><input id="audioswitch" type="checkbox"><span class="slider"></span></label>',
      '#allowed_tags' => ['div','input','span','label',],
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